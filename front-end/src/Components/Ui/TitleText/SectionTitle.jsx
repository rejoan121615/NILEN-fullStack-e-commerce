import React from "react";

const SectionTitle = (props) => {
    return (
        <h1
            className={`font-bold text-4xl xs:text-5xl uppercase 2xl:text-[75px] ${props.className}`}
        >
            {props.children}
        </h1>
    );
};

export default SectionTitle;
