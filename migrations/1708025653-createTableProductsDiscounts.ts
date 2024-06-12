import { Sql } from 'postgres';

type Discount = {
  id: number;
  discount: number;
  discountName: string;
};

export async function up(sql: Sql) {
  await sql`
  CREATE TABLE products_discounts (
    id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    product_id integer NOT NULL REFERENCES products (id) ON DELETE CASCADE,
    discount_id integer NOT NULL REFERENCES discounts (id) ON DELETE CASCADE
  );
  `;
}

export async function down(sql: Sql) {
  await sql`
  DROP TABLE products_discounts;
  `;
}
