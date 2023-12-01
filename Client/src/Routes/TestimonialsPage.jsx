// Routes/products.jsx
import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import "../App.css";
import { Testimonials} from "../components/testimonials";
import { Contact } from "../components/contact";
import { Navigation } from "../components/navigation";

const TestimonialsPage = ({ data }) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  // Your component logic here
  return (
    <div>
      <Navigation />
      {/* Render your products using the data prop */}
      <Testimonials data={landingPageData.Testimonials}/>
      <Contact data={landingPageData.Contact} />

    </div>
  );
};
export default TestimonialsPage;
