import React from "react";
import SquareBtn from "../../Ui/Buttons/SquareBtn";

const CheckOutAction = () => {
    return (
        <div
            className=" h-[150px] flex items-center border-b xl:col-start-3 xl:col-span-5 
                    xl:border-b-0 xl:border-l xl:justify-end xl:items-start xl:pt-10 xl:pr-10 "
        >
            <SquareBtn text="checkout" />
        </div>
    );
};

export default CheckOutAction;
