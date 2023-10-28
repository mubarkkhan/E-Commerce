import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { Home } from "./home/home";
import { About } from "./about/about";
import { Shop } from "./shop/shop";
import { CartProvider } from "react-use-cart";
import { Error } from "./error/error";
import { Cart } from "./Cart/cart";
import { Qrcode } from "./Cart/Qrcode";
import { Creditcard } from "./Cart/creditcard";
import { Paymentmethod } from "./Cart/paymentmethod";
import { Cashon } from "./Cart/cashon";
import { Shopdetail } from "./shop/shop-detailpage";
import { SellCard } from "./shop/sellcard";
import { Favourite } from "./Favourite/Favourite";


function App(){
  return(
    <>
    <CartProvider>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/paymentmethod" element={<Paymentmethod/>}/>
    <Route path="/qrcode" element={<Qrcode/>}/>
    <Route path="/cashon" element={<Cashon/>}/>
    <Route path="/creditcard" element={<Creditcard/>}/>
    <Route path="/shopdetail/:ShopId" element={<Shopdetail/>}/>
    <Route path="sellcard" element={<SellCard/>}/>
    <Route path="/favourite" element={<Favourite/>}/>
    <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}
export{App}
