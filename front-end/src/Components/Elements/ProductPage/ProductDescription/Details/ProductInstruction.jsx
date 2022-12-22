import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductInstruction = (props) => {
    const [InstructionData, setInstructionData] = useState([
        {
            title: "how to use",
            expand: false,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            title: "ingradients",
            expand: false,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
        {
            title: "shipping & payment",
            expand: false,
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        },
    ]);

    const CollapseHandler = (id) => {
        setInstructionData((prevState, index) => {
            return prevState;
        });
    };

    return (
        <div className={`${props.className} md:p-5`}>
            {InstructionData.map((item, index) => {
                return (
                    <div key={index}>
                        <div className=" border-b py-1 px-2 flex justify-between  ">
                            <h3 className=" uppercase font-2xl ">
                                {item.title}
                            </h3>
                            <button onClick={() => CollapseHandler(index)}>
                                {item.expand ? (
                                    <AiOutlineMinus className=" text-2xl " />
                                ) : (
                                    <AiOutlinePlus className=" text-2xl " />
                                )}
                            </button>
                        </div>
                        {item.expand ? (
                            <div className=" p-2 ">
                                <p>{item.description}</p>
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
};

export default ProductInstruction;
