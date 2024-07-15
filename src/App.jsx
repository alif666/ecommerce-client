import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Error from "./pages/Error";
import Product from "./pages/Product";
import ProductAddForm from "./pages/product/ProductAddForm.jsx";
import Cart from "./pages/cart/Cart";
import ProductProvider from "./providers/ProductProvider";

import AdminDasboard from "./pages/admin-pages/AdminDasbhaord.jsx";
import Login from "./pages/Login.jsx";
import Admin from "./pages/admin-pages/Admin.jsx";
import Aboutus from "./pages/Aboutus.jsx";
import Contactus from "./pages/Contactus.jsx";
import RegisterNew from "./pages/admin-pages/RegisterNew.jsx";
import UserProvider from "./providers/UserProvider.jsx";
import AdminLayout from "./pages/admin-pages/AdminLayout.jsx";
import ProductDisplay from "./pages/product/ProductDisplay.jsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AppLayout />} errorElement={<Error />}>
        <Route index element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="user" element={<Login />} />

        <Route path="aboutus" element={<Aboutus />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="product" element={<AdminDasboard />} />
        <Route path="seller" element={<AdminDasboard />} />
        <Route path="customer" element={<AdminDasboard />} />
      </Route>
      <Route path="admin" element={<AdminLayout />} errorElement={<Error />}>
        <Route index element={<Admin />} />
        <Route path="register" element={<RegisterNew />} />
        <Route path="product/add" element={<ProductAddForm />} />
        <Route path="product/display" element={<ProductDisplay/>}/>
      </Route>
      <Route path="*" element={<Error />} />
    </>
  )
);

function App() {
  return (
    <React.StrictMode>
      <ProductProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </ProductProvider>
    </React.StrictMode>
  );
}

export default App;
