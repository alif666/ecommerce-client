import { useEffect } from 'react';
import LinkButton from '../../components/LinkButton';
// import { useProduct } from '../../providers/hooks';

export default function Cart() {
 

  useEffect(() => {
    console.log('checking from cart');
    console.log(JSON.parse(localStorage.getItem('cartItems')));
  }, []);

  return (
    <div className="flex flex-col items-center bg-gray-100 m-auto px-4 py-2">
      hi
      {/* <ul role="list" className="divide-y divide-gray-200 w-full max-w-lg">
        {state.items.map(item => (
          <li key={item.id} className="flex py-6">
            <div className="ml-4 flex flex-1 flex-col">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <h3>{item.value}</h3>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <div className="flex">
                  <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul> */}
      <LinkButton to="-1" className="mt-4">&larr; Go back</LinkButton>
    </div>
  );
}
