import React from "react";
import SectionTitle from "../../../../Ui/TitleText/SectionTitle";
import CircleBtn from "../../../../Ui/Buttons/CircleBtn";
import ProductIncDec from "./ProductIncDec";


const Details = (props) => {
    return (
        <aside className={`${props.className} md:p-4 md:flex md:items-center md:w-full`}>
            <div className=" mt-3 md:w-full">
                <div>
                    <h5 className=" uppercase text-xl ">
                        hand sanitizer + refill Pa
                    </h5>
                    <SectionTitle className=" mt-2 md:text-4xl md:leading-[initial] ">
                        gentle paloma
                    </SectionTitle>
                </div>
                <div className=" flex flex-wrap items-center justify-between mt-0 max-w-[500px]
                md:mt-6 md:justify-between md:max-w-[initial] md:gap-y-6 xl:max-w-[700px] xl:mt-10 ">
                    <ProductIncDec className="" />
                    <h3 className=" text-3xl xl:text-5xl ">20,99 Taka</h3>
                    <CircleBtn
                        className=" mt-4 md:mt-0 "
                        type="orange"
                        text="add to cart"
                    />
                </div>
            </div>
        </aside>
    );
};

export default Details;
