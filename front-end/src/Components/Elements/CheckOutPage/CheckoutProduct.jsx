import React from "react";

const CheckoutProduct = ({ title, type, img, price, count }) => {
    return (
        <aside className=" grid grid-cols-3 mb-4 xl:grid-cols-7 xl:grid-rows-1
          xl:mb-0  ">
            <div className=" col-span-3 p-3 border-b xl:col-start-3 xl:col-span-3 xl:border-l ">
                <h1 className=" font-normal text-c-40 uppercase ">{title}</h1>
                <p>{type}</p>
            </div>
            <div className=" col-span-1 border-b xl:col-start-1 xl:col-span-2 xl:row-start-1
              ">
                <img className=" aspect-square xl:aspect-[1/0.8] xl:h-full " src={img} alt="product image" />
            </div>
            <div
                className=" col-span-2 p-3 border-b border-l flex items-center w-full
             sm:p-10 xl:col-start-6 xl:col-span-2 xl:px-8 "
            >
                <div className=" w-full">
                    <div className=" flex items-center justify-between ">
                        <h1
                            className=" text-2xl font-bold flex items-center gap-x-2
                         sm:text-3xl "
                        >
                            <span>-</span>
                            <span>1</span>
                            <span>+</span>
                        </h1>
                        <h1
                            className=" text-2xl font-bold
                         sm:text-3xl "
                        >
                            {price}$
                        </h1>
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
