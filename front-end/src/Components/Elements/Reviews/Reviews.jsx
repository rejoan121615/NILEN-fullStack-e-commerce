import React from "react";
import withSectionWrap from "../../HOC/withSectionWrap";

const ReviewsBrand = withSectionWrap(
    () => {
        return (
            <>
                <div className=" h-28"></div>
            </>
        );
    },
    {
        title: "reviews",
    }
);

const Reviews = () => {
    return (
        <>
            <ReviewsBrand />
            <p className=" font-semibold mt-10 px-6 max-w-[600px] mx-auto ">
                It doesn't matter your order is 1 cents or 1000 doller worth. We
                take everydoller seriously. We like to hear your comment's what
                do you think about us? What kind of freature you like? Just
                reach to us.
            </p>
        </>
    );
};

export default Reviews;
