import React from "react";
import { Link } from "react-router-dom";
import OrangeBtnBg from "../../../Assets/Images/button/btn_orange_bg.png";
import PurpleBtnBg from "../../../Assets/Images/button/btn_purple_bg.png";

const CircleBtn = (props) => {
    console.log(props.type === "purple");
    // props link, type = purple / orange , text
    return (
        <Link to={props.link} className=" inline-block ">
            <div
                className={`hover:-rotate-12 transition-all relative bg-no-repeat grid grid-cols-1 grid-rows-1 
            items-center justify-items-center  ${
                props.type === "purple"
                    ? " w-44 lg:w-56 xl:w-64 2xl:w-72 "
                    : "w-36 xl:w-44 2xl:w-48"
            } `}
            >
                <img
                    className=" col-[1/2] row-[1/2] "
                    src={props.type == "purple" ? PurpleBtnBg : OrangeBtnBg}
                    alt="button background"
                />
                <p
                    className={`col-[1/2] row-[1/2] text-sm text-white xl:text-base 2xl:text-xl
                    ${props.type === 'purple' ? " lg:w-20 text-center " : ""}`}
                >
                    {props.text}
                </p>
            </div>
        </Link>
    );
};

export default CircleBtn;
