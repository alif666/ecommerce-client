/* eslint-disable react/prop-types */
import { ProductContext } from "./hooks";
import {useState} from "react";
import { BASE_URL, API_KEY } from "./constant";
import { getProducts } from "./apiProducts";





export default function ProductProvider({ children }) {

  const [products, setProducts] = useState([]);
  const [isLoading,setIsLoading]=useState(false) ;
 
  const [formData, setFormData] = useState({
    name:'',
    description:'',
    price:0.00,
    quantity:0,
    categoryId:null,
    sellerId:null,
    image: [],
  });

  function HandleOnBlur(e) {
    const { name, value } = e.target;   
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function HandleOnDrop(acceptedFiles) {
    setFormData({
      ...formData,
      image: acceptedFiles,
    });
  }

  function HandleOnSubmit(e) {
    e.preventDefault();
    console.log("HANDLEONSUBMIT")
    console.log(formData);
  }




  async function fetchProducts() {
    setIsLoading(true);
  
    try {
      const res = await fetch(`${BASE_URL}/rest/v1/product?select=*`, {
        headers: {
          apikey: API_KEY,
          Authorization: `Bearer ${API_KEY}`,
        },
      });
  
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
  
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      // Handle the error appropriately in your UI
    } finally {
      setIsLoading(false);
    }
  }
  
  //POST PRODUCT TO REST
  async function submitProduct(formData){
    console.log('POST PRODUCT',formData);
    setIsLoading(true);
    try{
    const res = await fetch(`${BASE_URL}`,{
      method: 'POST',
      body: formData,
      headers: {
        // If you're sending FormData, you don't need to set Content-Type header manually.
        // It will be set automatically to multipart/form-data.
      },
    });

    if (!res.ok) {
      throw new Error('Failed to submit product');
    }

    const data = await res.json();
    setProducts((prevProducts) => [...prevProducts, data]);
  } catch(error) {
    console.error('Error:', error);
  } finally {
    setIsLoading(false);
  }
}

  function searchProducts(keyword) {
    console.log('SEARCH PRODUCTS CALLED ',keyword)
    const results = products.filter(item =>
      Object.values(item).some(value =>
        typeof value === "string" && value.toLowerCase().includes(keyword.toLowerCase())
      )
    );

    results.sort((a, b) =>
      Object.values(b).reduce((acc, val) =>
        acc + (typeof val === "string" && val.toLowerCase().includes(keyword.toLowerCase()) ? 1 : 0), 0
      ) -
      Object.values(a).reduce((acc, val) =>
        acc + (typeof val === "string" && val.toLowerCase().includes(keyword.toLowerCase()) ? 1 : 0), 0
      )
    );

    setProducts(results);
    // setSearchKeyword(keyword);
  }

  return (
    <ProductContext.Provider
      value={{
        HandleFetchProducts: fetchProducts,
        HandleOnBlur,
        HandleOnDrop,
        HandleOnSubmit,
        formData,
        setIsLoading,
        isLoading,
        products,
        HandleSubmitProduct:submitProduct,

        searchProducts,
 
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}
