import React from "react";
import SectionTitle from "../../Ui/TitleText/SectionTitle";

const CheckoutProduct = ({ title, type, img, price, count }) => {
    return (
        <aside className=" grid grid-cols-3 mb-4 ">
            <div className=" col-span-3 p-3 border-b ">
                <SectionTitle className=" font-normal ">{title}</SectionTitle>
                <p>{type}</p>
            </div>
            <div className=" col-span-1 border-b border-r ">
                <img className=" aspect-square" src={img} alt="product image" />
            </div>
        <div className=" col-span-2 p-3 border-b flex items-center w-full
             sm:p-10  ">
                <div className=" w-full">
                    <div className=" flex items-center justify-between ">
                        <h1 className=" text-2xl font-bold flex items-center gap-x-2
                         sm:text-3xl ">
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </h1>
                        <h1 className=" text-2xl font-bold
                         sm:text-3xl ">{price}$</h1>
                    </div>
                    <div className=" text-right mt-2">
                        <button className=" font-semibold underline text-right">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default CheckoutProduct;
