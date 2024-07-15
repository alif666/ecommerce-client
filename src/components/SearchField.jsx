// import {useProduct} from "../providers/hooks.js";


   // const {searchProducts} = useProduct();
   function HandleSearchOnChange(e){
 
}
export default function SearchField() {

  return (
<input onChange={()=>{HandleSearchOnChange}} className="rounded-4xl mx-4 px-4 py-2 focus:dark:border-spacing-0.5 focus:bg-opacity-50 focus:dark:bg-gray-dark bg-opacity-0 text-gray-dark" type = "text" placeholder="Search"/>
  )
}
