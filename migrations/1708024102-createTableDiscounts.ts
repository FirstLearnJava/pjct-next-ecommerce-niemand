import { Sql } from 'postgres';

/* type Discount = {
  id: number;
  discount: number;
  discountName: string;
}; */

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE discounts (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY, discount_name varchar(50) NOT NULL, discount_percentage integer NOT NULL
  );`;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE discounts;
  `;
}
