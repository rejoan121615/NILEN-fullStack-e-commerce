import React, { useState } from "react";
import withSectionWrap from "../../../HOC/withSectionWrap";
import { RiStarLine, RiStarFill } from "react-icons/ri";
import { BsArrowDown } from "react-icons/bs";
import CircleBtn from "../../../Ui/Buttons/CircleBtn";
import { useFormik } from "formik";
import ReviewList from "./ReviewList";
import NewReview from "./NewReview";


const Review = () => {
    return (
        <div className=" sm:grid sm:grid-cols-2">
            <ReviewList />
            <NewReview />
        </div>
    );
};

export default withSectionWrap(Review, {
    title: "reviews",
    boundry: false,
    slider: false,
});
