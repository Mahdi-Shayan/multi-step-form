import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartProvider from "./contexts/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <CartProvider>
            <Routes>
               <Route path="/" element={<App />} />
            </Routes>
         </CartProvider>
      </BrowserRouter>
   </React.StrictMode>
);
