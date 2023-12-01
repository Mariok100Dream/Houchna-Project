import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from "./Routes/Products.jsx";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import Home from "./Routes/Home.jsx";
import "./App.css";
import TestimonialsPage from "./Routes/TestimonialsPage.jsx";
import RegisterPage from "./Routes/Register.jsx";
import LoginPage from "./Routes/Login.jsx";
import CartPage from "./Routes/CartPage.jsx";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products data={landingPageData.Products}/>} />
          <Route path="/testimonials" element={<TestimonialsPage data={landingPageData.Testimonials}/>} />
          <Route path="/register" element={<RegisterPage data={landingPageData.Register}/>}/>
          <Route path="/login" element={<LoginPage data={landingPageData.Login}/>}/>
          <Route path="/cart" element={<CartPage data={landingPageData.Cart}/>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;