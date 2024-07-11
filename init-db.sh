#!/bin/bash
set -e

echo "Creating PostgreSQL role..."

psql -v ON_ERROR_STOP=1 --username "$PGUSERNAME" --dbname "$PGDATABASE" <<-EOSQL
    CREATE ROLE upleveled394e85812585128c2ff66693a2f38152 WITH LOGIN PASSWORD '$PGPASSWORD';
    ALTER ROLE upleveled394e85812585128c2ff66693a2f38152 CREATEDB;
EOSQL

echo "Role created successfully."
