// Routes/products.jsx
import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import "../App.css";
import Login from "../components/Login.jsx";

const LoginPage = ({ data }) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  // Your component logic here
  return (
    <div>
      {/* Render your products using the data prop */}
      <Login data={landingPageData.Login}/>
    </div>
  );
};
export default LoginPage;
