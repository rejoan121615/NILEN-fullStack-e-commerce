import React from "react";
import Main from "../Components/Elements/Main/Main";
import BestSellers from "../Components/Elements/BestSellers/BestSellers";
import NewProducts from "../Components/Elements/NewProducts/NewProducts";
import AboutUs from "../Components/Elements/AboutUs/AboutUs";
import Catagories from "../Components/Elements/Catagories/Catagories";

const Home = () => {
    return (
        <>
            <Main />
            <BestSellers />
            <NewProducts />
            <AboutUs />
            <Catagories />
        </>
    );
};

export default Home;
