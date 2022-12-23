import React from 'react'
import { RiStarLine, RiStarFill } from "react-icons/ri";
import { BsArrowDown } from "react-icons/bs";
import CircleBtn from "../../../Ui/Buttons/CircleBtn";
import { useFormik } from "formik";

const ReviewList = () => {
    const ReviewList = [
        {
            name: "michaelle",
            star: 4,
            reviewTxt:
                "I like the smell of the products, the design and the smoothness of my hands after using.",
        },
        {
            name: "ann",
            star: 5,
            reviewTxt:
                "Purse size, refllable, great fragrances, I will recommend it to everyone.",
        },
        {
            name: "margarita",
            star: 4,
            reviewTxt:
                "These sanitisers are a joy to use. Wonderful smells and reusable containers make them even more perfect",
        },
    ];
    // review handler
    const Review = (props) => {
        const reviewList = [];
        for (let a = 1; a <= 5; a++) {
            a <= props.revCount
                ? reviewList.push({
                      Element: RiStarFill,
                      color: "text-c-yellow",
                  })
                : reviewList.push({ Element: RiStarLine, color: "text-c-ash" });
        }
        return (
            <div className=" cursor-pointer flex gap-x-1 ">
                {reviewList.map((Star, index) => {
                    return (
                        <span key={index}>
                            <Star.Element
                                className={`${Star.color} text-xl sm:text-2xl `}
                            />
                        </span>
                    );
                })}
            </div>
        );
    };
    return (
        <div className=" py-3 px-4 sm:p-6 lg:p-10 xl:p-20 2xl:px-26 2xl:py-28 ">
            <ul>
                {ReviewList.map((review, index) => {
                    return (
                        <li key={index} className=" mb-4 sm:mb-6 ">
                            <div>
                                <div className=" flex justify-between items-center ">
                                    <h3 className=" text-c-25 uppercase font-normal">
                                        {review.name}
                                    </h3>
                                    <Review revCount={review.star} />
                                </div>
                                {/* reviews  */}
                                <div className=' mt-2 '>
                                    <p>{review.reviewTxt}</p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <button className=" text-c-red capitalize font-medium flex gap-x-2 items-center py-2 ">
                see more <BsArrowDown />
            </button>
        </div>
    );
};


export default ReviewList