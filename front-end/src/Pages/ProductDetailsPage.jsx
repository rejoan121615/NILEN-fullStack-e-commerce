import React from "react";
import BreadCrumb from "../Components/Ui/BreadCrumb/BreadCrumb";
import ProductDescription from "../Components/Elements/ProductPage/ProductDescription/ProductDescription";
import Review from "../Components/Elements/ProductPage/AddReviews/Review";

const ProductDetails = () => {
    return (
        <>
            <BreadCrumb />
            <ProductDescription />
            <Review />
        </>
    );
};

export default ProductDetails;
