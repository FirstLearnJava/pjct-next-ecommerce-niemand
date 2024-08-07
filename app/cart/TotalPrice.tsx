import { getSingleProductsById } from '../database/products';
type cartProduct = { id: number; quantity: number };

interface TotalPriceProps {
  cartProducts: cartProduct[] | undefined;
}
export default async function TotalPrice(props: TotalPriceProps) {
  if (!props.cartProducts) {
    return;
  }
  const totalPriceArray = await Promise.all(
    props.cartProducts?.map(async (cartProduct) => {
      const dataBaseProduct = await getSingleProductsById(cartProduct.id);
      const individualTotalPrice =
        cartProduct.quantity * dataBaseProduct!.price;
      return individualTotalPrice;
    }),
  );
  const totalPriceSum = totalPriceArray
    ?.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    .toFixed(2);

  if (totalPriceSum) {
    return (
      <div className="md:mr-4 text-lg mt-9 font-inknut">
        Subtotal
        <span className="font-fraunces text-lg  ml-6 md:ml-20">
          € {totalPriceSum}
        </span>
      </div>
    );
  }
}
