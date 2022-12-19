import React from "react";
import Main from "../Components/Elements/Main/Main";
import BestSellers from "../Components/Elements/BestSellers/BestSellers";
import NewProducts from "../Components/Elements/NewProducts/NewProducts";

const Home = () => {
    return (
        <>
            <Main />
            <BestSellers />
            <NewProducts />
        </>
    );
};

export default Home;
