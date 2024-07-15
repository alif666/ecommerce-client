/* eslint-disable react/prop-types */
import AddToCartButton from "./AddToCartButton";

export default function ProductItem({ product }) {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none">
        <img
          src={product.imageSrc}
          alt={product.imageAlt}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex  flex-row justify-between">
        <div className="flex flex-col px-2 pb-2">
          <h3 className="text-sm font-bold tracking-tight dark:text-gray-light text-gray-900">
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </h3>
          <p className="mt-1 text-sm font-bold tracking-tight dark:text-gray-light text-gray-900">{product.color}</p>
        </div>
        <p className="mx-0 px-4 text-4xl font-bold tracking-tight dark:text-gray-light text-gray-900">{product.price}</p>
      </div>
      <div className="flex justify-end mt-2">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
