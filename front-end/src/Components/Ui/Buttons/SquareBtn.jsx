import React from "react";

const SquareBtn = (props) => {
    return (
        <button
            type={props?.type ? "submit" : "button"}
            onClick={(e) => props.click(e)}
            className="square-btn--red"
        >
            {props.text}
        </button>
    );
};

export default SquareBtn;
