'use client';

import RemoveItem from './actions';

type Props = { id: number };
export default function RemoveButton(props: Props) {
  return (
    <form>
      <button formAction={async () => await RemoveItem(props.id)}>
        remove product
      </button>
    </form>
  );
}
