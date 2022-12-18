import React from "react";
import { Link } from "react-router-dom";
import PurpleBtnBg from "../../../Assets/Images/button/btn_orange_bg.png";

const PurpleBtn = (props) => {
    return (
        <Link to={props.link} className=" inline-block ">
            <div
                className=" hover:-rotate-12 transition-all relative bg-no-repeat grid grid-cols-1 grid-rows-1 
            items-center justify-items-center w-36 xl:w-44 2xl:w-48 "
            >
                <img
                    className=" col-[1/2] row-[1/2] "
                    src={PurpleBtnBg}
                    alt="button background"
                />
                <p className=" col-[1/2] row-[1/2] text-sm text-white xl:text-base 2xl:text-xl ">{props.text}</p>
            </div>
        </Link>
    );
};

export default PurpleBtn;
