/* eslint-disable react-hooks/exhaustive-deps */
import ProductItem from "./ProductItem";
import { useProduct } from "../../providers/hooks";
import { useEffect } from "react";
import Loading from "./../Loading"; 
import SearchField from "../../components/SearchField";
import ResponsiveDisplayCard from "../../components/ResponsiveDisplayCard";
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
   
      <ResponsiveDisplayCard labelHeader={"Buy Now"}>
        {products.map(product=>(
            <ProductItem key={product.id} product={product}/>
        ))}
              
      </ResponsiveDisplayCard>
 
    )
  }
  