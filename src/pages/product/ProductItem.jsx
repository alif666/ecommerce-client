/* eslint-disable react/prop-types */
import { ShoppingBagIcon } from "@heroicons/react/24/outline";


export default function ProductItem({ product }) {


  return (
    <div className="mt-4 relative border-4 border-gray-dark bg-gray-dark flex flex-col items-center">
    <div className="relative rounded-md">
      <img
        src={product.image1} // Assuming image1 is the primary image
        alt={product.name}
        className="rounded-md mx-auto object-cover object-center lg:h-full lg:w-full"
      />
    </div>
    <div className="relative text-center w-full">
      <div className="flex flex-col px-2 pb-2 mb-4">
        <h3 className="text-sm text-gray-700">
          <span aria-hidden="true" className="inset-0" />
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.description}</p>
      </div>
      <p className="mx-0 px-4 text-4xl font-bold text-gray-700">${product.price}</p>
    </div>
    <div className="relative justify-items-end mt-2 w-full flex justify-center">
      <button

        id={product.name}
        name={product.name}
        type="button"
        className="
        flex-shrink-0 
        flex items-center 
        rounded-md 
        text-gray-400 
        hover:text-white 
        focus:outline-none 
        focus:ring-2 
        focus:ring-white 
        focus:ring-offset-2 
        focus:ring-offset-gray-800"
      >
        <ShoppingBagIcon className="h-6 mr-2" />
        <span>Add to Cart</span>
      </button>
    </div>
  </div>
  );
}
