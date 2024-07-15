/* eslint-disable react-hooks/exhaustive-deps */
import ProductItem from "./ProductItem";
import { useProduct } from "../../providers/hooks";
import { useEffect } from "react";
import Loading from "./../Loading"; 
import SearchField from "../../components/SearchField";
// const products = [
//     {
//       id: 1,
//       name: 'Basic Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$35',
//       color: 'Black',
//     },
//     // More products...
//   ]

  
  export default function ProductList() {
    const {HandleFetchProducts, products,isLoading} = useProduct();
 
    useEffect(()=>{
      HandleFetchProducts();
      console.log(products);
    },[]);
    
  if(isLoading){
    return(
      <Loading/>
    );
  }
 
    return (
        <div className="m-auto justify-evenly px-4  sm:px-6 sm:py-24 lg:px-8">
          <h1 className="text-2xl font-bold text-center tracking-tight uppercase dark:text-gray-dark text-gray-light justify-center">New Arrival</h1>
          {/* <SearchField/> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductItem key = {product.id} product = {product}/>
            ))}
          </div>
        </div>
 
    )
  }
  