import React from "react";
import AboutUs from "./aboutUs/AboutUs";
import Catalog from "./catalog/Catalog";
import News from "./news/News";
import ContactUs from "./contactUs/ContactUs";


export default function Home() {

    return (
        <div>
            <AboutUs />
            <Catalog />
            <News />
            <ContactUs />
        </div>
    )
}