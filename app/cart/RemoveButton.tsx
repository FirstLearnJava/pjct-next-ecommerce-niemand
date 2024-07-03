'use client';

import RemoveItem from './actions';

type Props = { id: number };
export default function RemoveButton(props: Props) {
  return (
    <form className="mt-8 ">
      <button
        formAction={async () => await RemoveItem(props.id)}
        className=" border-b-[1px] border-black w-[60px] font-[17px]"
      >
        <div className="hover:text-secondary hover:font-semibold">Remove</div>
      </button>
    </form>
  );
}
