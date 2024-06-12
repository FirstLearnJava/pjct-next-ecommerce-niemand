import { Sql } from 'postgres';

export const discounts = [
  { id: 1, discountName: 'FIRSTPURCHASE', discountPercentage: 10 },
  { id: 2, discountName: 'BLACKFRIDAY2024', discountPercentage: 20 },
  { id: 3, discountName: 'BIRTHDAY', discountPercentage: 10 },
  { id: 4, discountName: 'SECRETEMPLOYEES', discountPercentage: 30 },
];

export async function up(sql: Sql) {
  for (const discount of discounts) {
    await sql`
  INSERT INTO discounts
  (discount_name, discount_percentage)
  VALUES
  (${discount.discountName}, ${discount.discountPercentage});
  `;
  }
}

export async function down(sql: Sql) {
  for (const discount of discounts) {
    await sql`
    DELETE FROM discounts
    WHERE id=${discount.id};`;
  }
}
