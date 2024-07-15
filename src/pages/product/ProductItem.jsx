/* eslint-disable react/prop-types */

import ResponsiveDisplayCardItems from "../../components/ResponsiveDisplayCardItems";


export default function ProductItem({product}) {


  return (
<ResponsiveDisplayCardItems labelHeader={product.name} price = {product.price} imgCaraousals={[
  {
    path:product.image1,
    altText:"Image 1",
  },
  {
    path:product.image2,
    altText:"Image 2",
  },
  {
    path:product.image3,
    altText: "Image 3",
  },
]} >
  {product.description}
</ResponsiveDisplayCardItems>
  );
}
