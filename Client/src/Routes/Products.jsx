// Routes/products.jsx
import React, { useState, useEffect } from "react";
import JsonData from "../data/data.json";
import "../App.css";
import { Gallery } from "../components/gallery";
import CardComponent from "../components/Card";
import { Contact } from "../components/contact";
import { Navigation } from "../components/navigation";

const Products = ({ data }) => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);
  // Your component logic here
  return (
    <div>
      <Navigation />
      {/* Render your products using the data prop */}
      <Gallery data={landingPageData.Gallery}/>
      <div className="container text-center">
        <div className="section-title">
          <h2>Produits</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
          <CardComponent/>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {/* {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."} */}
          </div>
        </div>
        <div className="row text-center" style={{marginTop:'25px'}}> 
        <a
                  href="/products"
                  className="btn btn-custom btn-lg "
                >
                  Voir Plus
                </a>{" "}
        </div>
      </div>
      <Contact data={landingPageData.Contact} />

    </div>
  );
};
export default Products;
