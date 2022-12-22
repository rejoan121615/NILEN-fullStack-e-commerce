import React from 'react'

const Description = (props) => {
    return (
        <div className={` ${props.className} mt-6 md:p-5 md:mt-0 `}>
            <p className=" mb-2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className=" mb-2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
    );
};

export default Description