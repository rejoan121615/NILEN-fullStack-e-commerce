import React, { useState } from "react";
import SectionTitle from "../../../../Ui/TitleText/SectionTitle";
import CircleBtn from "../../../../Ui/Buttons/CircleBtn";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductIncDec = (props) => {
    const [count, setCount] = useState(1);

    const countHandler = (type) => {
        switch (type) {
            case "inc":
                setCount((c) => c + 1);
                break;
            case "dec":
                if (count > 1) {
                    setCount((c) => c - 1);
                }
                break;
            default:
                setCount(count);
                throw Error("please pass inc / dec props");
                break;
        }
    };
    return (
        <div
            className={
                props.className + " flex items-center gap-x-2  font-bold"
            }
        >
            <button
                className=" cursor-pointer text-3xl -mt-[8px] "
                onClick={() => countHandler("dec")}
            >
                -
            </button>
            <h2 className="w-4 text-center text-[25px] ">{count}</h2>
            <button
                className=" cursor-pointer text-3xl -mt-[8px] "
                onClick={() => countHandler("inc")}
            >
                +
            </button>
        </div>
    );
};

export default ProductIncDec;
