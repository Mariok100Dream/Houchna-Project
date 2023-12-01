// Routes/products.jsx
import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import "../App.css";
import Cart from "../components/Cart";

const CartPage = ({ data }) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  // Your component logic here
  return (
    <div>
      {/* Render your products using the data prop */}
      
      <div className="container text-center">
        <div className="section-title">
          <h2>Produits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
          <Cart/>
        </div>

      </div>
    </div>
  );
};
export default CartPage;