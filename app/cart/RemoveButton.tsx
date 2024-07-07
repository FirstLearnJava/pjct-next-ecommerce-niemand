'use client';

import RemoveItem from './actions';

type Props = { id: number };
export default function RemoveButton(props: Props) {
  return (
    <form className="md:mt-8">
      <button
        formAction={async () => await RemoveItem(props.id)}
        className=" border-b-[1px] border-black w-[50px] mr-3 md:w-[60px] font-[17px]"
      >
        <div className=" hidden md:block hover:text-secondary hover:font-semibold">
          Remove
        </div>
        <div className="md:hidden font-medium text-sm">Remove</div>
      </button>
    </form>
  );
}
