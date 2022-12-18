import React from "react";

const SectionTitle = (props) => {
    return (
        <h1
            className={`font-bold text-5xl uppercase xl:text-6xl ${props.className}`}
        >
            {props.children}
        </h1>
    );
};

export default SectionTitle;
