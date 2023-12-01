// Routes/products.jsx
import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import "../App.css";
import Register from "../components/Register.jsx";

const RegisterPage = ({ data }) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  // Your component logic here
  return (
    <div>
      {/* Render your products using the data prop */}
      <Register data={landingPageData.Register}/>
    </div>
  );
};
export default RegisterPage;
