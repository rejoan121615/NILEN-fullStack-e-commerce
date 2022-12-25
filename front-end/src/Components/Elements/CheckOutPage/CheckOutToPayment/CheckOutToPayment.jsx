import React, { useState } from "react";
import Contact from "./Contact";
import { GiSevenPointedStar } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import SquareBtn from "../../../Ui/Buttons/SquareBtn";
import Shipping from "./Shipping";
import Payment from "./Payment";

const CheckOutToPayment = () => {
    let [active, setActive] = useState(2);
    const [formState, setFormState] = useState([
        {
            title: "contacts",
            values: "",
            element: <Contact />,
        },
        {
            title: "shipping",
            values: "",
            element: <Shipping />,
        },
        {
            title: "payments",
            values: "",
            element: <Payment />,
        },
        {
            title: "complete",
            values: "",
            element: <h1>Thanks for your order</h1>,
        },
    ]);

    const formStateController = (type, value) => {
        if (type === "back" && active !== 0) {
            setActive(--active);
        } else if (type === "forward" && active !== 2) {
            setActive(++active);
        }
    };

    return (
        <div className=" xl:col-start-1 xl:col-span-5  ">
            <div className=" xl:px-16 ">
                <h1 className=" text-c-60 font-bold uppercase ">checkout</h1>
            </div>
            {/* form step  */}
            <div className=" xl:py-4 xl:px-16 border-y ">
                <ul className=" flex items-center gap-x-3 ">
                    <li
                        className={`${
                            active === 0
                                ? "text-c-red"
                                : active > 0
                                ? "text-c-purple"
                                : ""
                        } text-c-25 uppercase flex items-center gap-x-3`}
                    >
                        Contacts
                        <GiSevenPointedStar className=" text-2xl " />
                    </li>
                    <li
                        className={`${
                            active === 1
                                ? "text-c-red"
                                : active > 1
                                ? "text-c-purple"
                                : ""
                        } text-c-25 uppercase flex items-center gap-x-3`}
                    >
                        shipping
                        <GiSevenPointedStar className=" text-2xl " />
                    </li>
                    <li
                        className={`${
                            active === 2
                                ? "text-c-red"
                                : active > 2
                                ? "text-c-purple"
                                : ""
                        } text-c-25 uppercase`}
                    >
                        payment
                    </li>
                </ul>
            </div>
            {/* form  */}
            <div className=" px-16 ">{formState[active].element}</div>
            {/* form control panel  */}
            <div className=" flex items-center justify-between mt-[150px] xl:px-16 ">
                <button
                    onClick={() => formStateController("back")}
                    className=" flex items-center font-bold gap-x-4 text-2xl "
                >
                    <BiArrowBack className=" text-[28px] mt-1 " />
                    back
                </button>
                <SquareBtn
                    click={() => formStateController("forward")}
                    text="next"
                />
            </div>
        </div>
    );
};

export default CheckOutToPayment;
