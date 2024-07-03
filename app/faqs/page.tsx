import Link from 'next/link';

export default function FaqsPage() {
  return (
    <div className="bg-tertiary">
      <div className="flex flex-col mt-[103px] w-[75%] mx-[12.5%] gap-14 font-inknut px-[2%]  ">
        <h1 className="text-center mt-20 text-[28px]">FAQS</h1>
        <div>
          <h2 className="mb-3 text-lg">Return Policy</h2>
          <p className="font-fraunces leading-8">
            All sales are <span className=" font-semibold">final sale</span>{' '}
            items and therefore we do not accept returns. In the event an item
            breaks on its way to a customer we require that the customer inform
            us of the incident by{' '}
            <span className=" font-semibold">
              sending us pictures of the broken item as well as pictures of the
              inner and outer packaging the item came in
            </span>
            . Once we receive these key pieces, the customer will receive store
            credit for the broken item's value.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-lg">Item Care</h2>
          <p className="font-fraunces leading-8">
            Items are dish washer safe but we recommend customers hand wash
            their items. Items are not microwavable.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-lg">Availability</h2>
          <p className="font-fraunces leading-8">
            All work is built and painted by hand and every object is unique.
            New ceramic is added in batches and released periodically.
            Collections tend to sell out quickly. Follow{' '}
            <Link
              href="https://www.instagram.com"
              className="font-semibold hover:text-secondary hover:scale-110"
            >
              @niemand
            </Link>{' '}
            below, to be notified when new collections launch.
          </p>
        </div>
        <div>
          <h2 className="mb-3 text-lg">Shipping</h2>
          <p className="font-fraunces leading-8">
            We ship with Post Express. You can expect to receive your delivery
            within two workdays in Austria and within 3 days in Europe.
          </p>
        </div>
        <div className="mb-20">
          <h2 className="mb-3 text-lg">Pick Up / Shop in Store</h2>
          <p className="font-fraunces leading-8">
            Please contact us to schedule an appointment to view pieces or to
            pick up an order in person. We take all major credit cards.
          </p>
        </div>
      </div>
    </div>
  );
}
