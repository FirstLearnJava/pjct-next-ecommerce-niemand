import { Sql } from 'postgres';

export type Product = {
  id: number;
  productName: string;
  type: string;
  price: number;
  apiId: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  product_name varchar(100) NOT NULL,
  type varchar(50) NOT NULL,
  price decimal(10, 2) NOT NULL,
  api_id varchar(100) NOT NULL
  )`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products;`;
}
