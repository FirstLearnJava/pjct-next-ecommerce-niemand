import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// __dirname is not defined in ES module scope, so we define it
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const timestamp = Math.floor(Date.now() / 1000); // Current Unix timestamp
const migrationName = process.argv[2] || 'migration'; // Custom name from command line or default
const filename = `${timestamp}-${migrationName}.ts`;
const directoryPath = path.join(__dirname, 'migrations');

// Ensure the migrations directory exists
if (!fs.existsSync(directoryPath)) {
  fs.mkdirSync(directoryPath, { recursive: true });
}

// Path for the new migration file
const filePath = path.join(directoryPath, filename);

// Create the file
fs.writeFileSync(filePath, '// New migration file\n');
