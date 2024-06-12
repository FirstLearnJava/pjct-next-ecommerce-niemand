import { Sql } from 'postgres';

export const productsDiscounts = [
  { id: 1, productId: 4, discountId: 4 },
  { id: 2, productId: 3, discountId: 2 },
  { id: 3, productId: 2, discountId: 3 },
  { id: 4, productId: 1, discountId: 4 },
];

export async function up(sql: Sql) {
  for (const productsDiscount of productsDiscounts) {
    await sql`
    INSERT INTO products_discounts
    (product_id, discount_id)
    VALUES
    (${productsDiscount.productId}, ${productsDiscount.discountId});
    `;
  }
}
export async function down(sql: Sql) {
  for (const productsDiscount of productsDiscounts) {
    await sql`
  DELETE FROM products_discounts
  WHERE id=${productsDiscount.id}`;
  }
}
