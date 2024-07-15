import { useEffect } from "react";
import { useProduct } from "../../providers/hooks";
import ResponsiveDisplayCard from "../../components/ResponsiveDisplayCard";
import ProductItem from "./ProductItem";
import DisplayField from "../../components/DisplayField";
import ImageCarousal from "../../components/ImageCarousal";

export default function ProductDisplay() {
  const { HandleFetchProducts, products } = useProduct();


  useEffect(() => {
    HandleFetchProducts();


    console.log(products);
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-xs w-full sm:w-1/2 lg:w-1/3 p-2 box-border"
        >
          <div className="border-dotted border-2 p-2 h-lg border-white dark:border-dark shadow-md rounded-lg overflow-hidden">
            <ImageCarousal />
            <p className="text-sm p-4">
              <span className="text-lg mx-auto">Product Name: </span>{product.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
