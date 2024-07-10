#!/usr/bin/env bash

# Exit if any command exits with a non-zero exit code
set -o errexit

# Check for required environment variables
: "${PGDATABASE:?Need to set PGDATABASE}"
: "${PGUSERNAME:?Need to set PGUSERNAME}"
: "${PGPASSWORD:?Need to set PGPASSWORD}"

# Set volume path for use in PostgreSQL paths if volume directory exists
VOLUME_PATH="/postgres-volume"

# Create and set permissions for PostgreSQL directories
echo "Creating folders for PostgreSQL and adding permissions for postgres user..."
mkdir -p $VOLUME_PATH/run/postgresql/
chown -R postgres:postgres $VOLUME_PATH

# Remove any existing data if initdb is to be run
if [ -d "$VOLUME_PATH/run/postgresql" ]; then
    rm -rf $VOLUME_PATH/run/postgresql/*
fi

# Initialize PostgreSQL database
echo "Initializing PostgreSQL database..."
su postgres -c "initdb -D $VOLUME_PATH/run/postgresql/"

# Configure PostgreSQL to listen for connections from any address
echo "Configuring PostgreSQL to listen on all addresses..."
echo "listen_addresses='*'" >> $VOLUME_PATH/run/postgresql/postgresql.conf

# Start PostgreSQL
echo "Starting PostgreSQL..."
su postgres -c "pg_ctl start -D $VOLUME_PATH/run/postgresql/ -l $VOLUME_PATH/run/postgresql/logfile"

# Wait for PostgreSQL to start up
sleep 5

# Create database and user with credentials from Fly.io secrets
echo "Creating database and user..."
su postgres -c "psql -U postgres postgres" <<SQL
    CREATE DATABASE $PGDATABASE;
    CREATE USER $PGUSERNAME WITH ENCRYPTED PASSWORD '$PGPASSWORD';
    GRANT ALL PRIVILEGES ON DATABASE $PGDATABASE TO $PGUSERNAME;
    \connect $PGDATABASE;
    CREATE SCHEMA $PGUSERNAME AUTHORIZATION $PGUSERNAME;
SQL

# Run migrations
echo "Running migrations..."
pnpm migrate up

# Start the application
echo "Starting the application..."
./node_modules/.bin/next start
