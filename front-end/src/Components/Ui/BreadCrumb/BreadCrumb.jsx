import React from "react";

const BreadCrumb = () => {
    const JumpedPage = ["home", "catalogue", "toothpaste", "gentle paloma"];
    return (
        <div className=" w-full border-b ">
            <div className=" max-boundry">
                <div className=" px-4 ">
                    <div className=" py-3 xl:py-5 ">
                        {JumpedPage.map((address, index) => {
                            return (
                                <p
                                    key={index}
                                    className={` capitalize font-semibold relative inline-block mb-1 sm:mb-0   ${
                                        JumpedPage.length - 1 === index
                                            ? " text-slate-400 "
                                            : " after:content-['_/'] after:absolute after:-right-[12px] mr-[15px] "
                                    }`}
                                >
                                    {address}
                                </p>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadCrumb;
