import postgres from 'postgres';
import { config } from 'dotenv-safe';

// confiq() uses variables from .env end passes them to the postgres URL
config();

const sql = postgres();

console.log(
  await sql`
  SELECT * FROM products;`,
);

//just for testing, if you need access to the commandline you have to shutoff postgres server
await sql.end();
