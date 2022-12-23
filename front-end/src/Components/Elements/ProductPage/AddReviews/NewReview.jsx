import React, {useState} from "react";
import { RiStarLine, RiStarFill } from "react-icons/ri";
import { BsArrowDown } from "react-icons/bs";
import CircleBtn from "../../../Ui/Buttons/CircleBtn";
import { useFormik } from "formik";

const NewReview = () => {
    const [review, setReview] = useState([]);
    const ReviewHandler = (id) => {};
    const userReview = useFormik({
        initialValues: {
            text: "",
        },
        onSubmit: (value) => {
            console.log("your value", value);
        },
    });
    return (
        <div className=" p-3 sm:border-l sm:p-6 lg:p-10 xl:p-20 2xl:px-26 2xl:py-28 ">
            <h3 className=" text-c-25 uppercase font-normal ">your review</h3>
            {/* review list  */}
            <div className=" items-center flex gap-x-1 mt-3  ">
                <span>
                    <RiStarLine className=" text-xl sm:text-2xl" />
                </span>
                <span>
                    <RiStarLine className=" text-xl sm:text-2xl" />
                </span>
                <span>
                    <RiStarLine className=" text-xl sm:text-2xl" />
                </span>
                <span>
                    <RiStarLine className=" text-xl sm:text-2xl" />
                </span>
                <span>
                    <RiStarLine className=" text-xl sm:text-2xl" />
                </span>
            </div>
            {/* review form */}
            <div className=" lg:flex lg:items-center lg:gap-x-5  ">
                <textarea
                    cols={35}
                    rows={5}
                    className=" border rounded-lg mt-3 lg:h-[175px] "
                    onChange={userReview.handleChange}
                    value={userReview.values.text}
                    name="text"
                    placeholder=" Please inter your review ... "
                ></textarea>
                <div className=" w-[150px] mt-3 ">
                    <CircleBtn text="send" type="purple" width={true} />
                </div>
            </div>
        </div>
    );
};

export default NewReview;
