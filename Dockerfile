# Builder stage
FROM node:18-alpine AS builder
ENV NODE_ENV=production

# Install necessary tools
RUN apk add --no-cache libc6-compat yq postgresql-client bash

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy the content of the project to the machine
COPY . .

# Merge necessary dev dependencies into dependencies for production build
RUN yq --inplace --output-format=json '(.dependencies = .dependencies * (.devDependencies | to_entries | map(select(.key | test("^(typescript|@types/*|eslint-config-upleveled)$"))) | from_entries)) | (.devDependencies = {})' package.json

# Install dependencies and build the project
RUN pnpm install && pnpm build

# Runner stage
FROM node:18-alpine AS runner
ENV NODE_ENV=production

# Install necessary tools
RUN apk add --no-cache bash postgresql

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /app

# Copy built app and necessary files
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/migrations ./migrations
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.env.production ./
COPY --from=builder /app/next.config.js ./

# Copy start script and make it executable
COPY --from=builder /app/scripts ./scripts
RUN chmod +x /app/scripts/fly-io-start.sh

# Run the start script
CMD ["./scripts/fly-io-start.sh"]
