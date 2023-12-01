import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import JsonData from "../data/data.json";
import {Header}  from "../components/header.jsx";
import {About} from "../components/about.jsx";
import {Gallery} from "../components/gallery.jsx";
import {Team} from "../components/Team.jsx";
import  {Testimonials} from "../components/testimonials.jsx";
import { Contact } from '../components/contact.jsx';
import { Navigation } from '../components/navigation.jsx';

const Home = (props) => {
    const [landingPageData, setLandingPageData] = useState({});
        useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

return (
    <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <About data={landingPageData.About} />
        <Gallery data={landingPageData.Gallery} />
        <Team data={landingPageData.Team} />
        <Testimonials data={landingPageData.Testimonials} />
        <Contact data={landingPageData.Contact} />
    </div>
)
}
export default Home;

