import { useEffect } from "react";
import { useProduct } from "../../providers/hooks";


import ResponsiveDisplayCard from "../../components/ResponsiveDisplayCard";
import ProductItemDisplay from "./ProductItemDisplay";

export default function ProductDisplay() {
  const { HandleFetchProducts, products } = useProduct();

  useEffect(() => {
    HandleFetchProducts();

    console.log(products);
  }, []);

  return (
    <ResponsiveDisplayCard>
        {products.map((product) => (
          <ProductItemDisplay key={product.id} product={product}/>
        ))}
    </ResponsiveDisplayCard>
  );
}
