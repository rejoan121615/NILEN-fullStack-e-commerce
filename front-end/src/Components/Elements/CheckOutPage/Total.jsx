import React from "react";

const Total = () => {
    return (
        <div
            className=" h-[150px] border-b flex items-center px-4
                     xl:col-start-3 xl:col-span-5 xl:border-l xl:p-10 "
        >
            <div className=" flex items-center justify-between gap-x-6 w-full ">
                <p className=" font-semibold">
                    Shipping calculated in checkout
                </p>
                <p className=" font-semibold">Total</p>
                <h1 className=" text-c-40 font-normal">41,98$</h1>
            </div>
        </div>
    );
};

export default Total;
