import ImageCarousal from "../../components/ImageCarousal"
export default function ProductItemDisplay({key, product}) {
  return (
    <div
    key={key}
    className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden"
  >
    <div className="mx-auto flex flex-col">
      <ImageCarousal />
      <div className="p-8 flex-grow">
        <div className="uppercase tracking-wide font-semibold">
          <span className="font-light">Name: </span>
          {product.name}
        </div>
        <div className="uppercase tracking-wide font-semibold">
          <span className="font-light">Description: </span>
          {product.description}
        </div>
        <p className="mt-2 text-slate-500">TK: {product.price}</p>
        <p className="mt-2 text-slate-500">QTY: {product.quantity}</p>
      </div>
    </div>
  </div>
  )
}
