import React from "react";

const SquareBtn = (props) => {
    return (
        <button
            onClick={() => props.click()}
        className=" w-full bg-c-red-500 border text-base
             py-4 text-white font-semibold tracking-wider xl:inline-block xl:w-[initial] xl:px-12 "
        >
            {props.text}
        </button>
    );
};

export default SquareBtn;
