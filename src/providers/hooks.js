// hooks.js
import { createContext, useContext } from "react";

// Create the User Context
export const UserContext= createContext();

export function useUser(){
  const context = useContext(UserContext);
  console.log("User Context ", context);
  if(context===undefined){
    throw new Error("useUser ust be used within a UserProvider");
  }
  return context;
}



// Create the Product Context
export const ProductContext = createContext();

export function useProduct() {
  const context = useContext(ProductContext);
  console.log("Product context:", context);
  if (context === undefined) {
    throw new Error("useProduct must be used within an ProductProvider");
  }
  return context;
}
