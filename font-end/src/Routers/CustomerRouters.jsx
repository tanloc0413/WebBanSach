import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../customer/pages/HomePage/HomePage";
import ProductList from "../customer/pages/ProductList/ProductList";
import Header from "../customer/components/Header/Header";
import Footer from "../customer/components/Footer/Footer";
import ProductDetail from "../customer/pages/ProductDetail/ProductDetail";
import NotFound from "../customer/pages/NotFound/NotFound";
import Cart from "../customer/pages/Cart/Cart";
import ProductList1 from "../customer/pages/ProductList/ProductList1";
import UserSettings from "../customer/pages/User/UserSettings";

const CustomerRouters = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />}>
          {" "}
        </Route>
        <Route path="/categories/:categoryName" element={<ProductList />}>
          {" "}
        </Route>
        <Route path="/products/name/:productName" element={<ProductList1 />}>
          {" "}
        </Route>
        <Route path="/products/:productId" element={<ProductDetail />}>
          {" "}
        </Route>
        <Route path="/cart" element={<Cart />}>
          {" "}
        </Route>
        <Route path="/profile" element={<UserSettings />}>
          {" "}
        </Route>
        <Route component={NotFound} />
        {/* <Route path="/not-found" element={<NotFound />}/> */}
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
