import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import SectionTitle from "../../Ui/TitleText/SectionTitle";
import ProductImg from "../../../Assets/Images/products-img/product.jpg";
import SquareBtn from "../../Ui/Buttons/SquareBtn";

const Checkout = () => {
    const ProductList = [
        {
            title: "gentle paloma",
            type: "Hand Sanitizer + Refill PA",
            img: ProductImg,
            price: 2099,
            count: 1,
        },
        {
            title: "manhattan glace",
            type: "Hand Sanitizer + Refill PA",
            img: ProductImg,
            price: 2099,
            count: 1,
        },
    ];
    return (
        <section>
            <div className=" max-w-max-boundry mx-auto xl:grid xl:grid-cols-12  ">
                <div
                    className=" xl:col-start-6 xl:col-span-7 xl:border-l xl:grid xl:grid-cols-4 xl:border-b 
                 xl:bg-white xl:-translate-y-[90px] 2xl:-translate-y-[100px] "
                >
                    <div className=" px-3 py-2 xl:h-[88px] 2xl:h-[98px] ">
                        <h1 className=" text-c-40 uppercase ">cart</h1>
                    </div>
                    {/* product lists  */}
                    <div className=" xl:col-start-1 xl:col-span-4">
                        {ProductList.map((pro, index) => {
                            return (
                                <CheckoutProduct
                                    title={pro.title}
                                    type={pro.type}
                                    img={pro.img}
                                    price={pro.price}
                                    count={pro.count}
                                />
                            );
                        })}
                    </div>
                    {/* total calculation  */}
                    <div
                        className=" h-[150px] border-b flex items-center px-4
                     xl:col-start-2 xl:col-span-3 xl:border-l xl:p-10 "
                    >
                        <div className=" flex items-center justify-between gap-x-6 w-full ">
                            <p className=" font-semibold">
                                Shipping calculated in checkout
                            </p>
                            <p className=" font-semibold">Total</p>
                            <h1 className=" text-c-40 font-normal">41,98$</h1>
                        </div>
                    </div>
                    {/* checkout button  */}
                    <div
                        className=" h-[150px] flex items-center border-b xl:col-start-2 xl:col-span-3 
                    xl:border-b-0 xl:border-l xl:justify-end xl:items-start xl:pt-10 xl:pr-10 "
                    >
                        <SquareBtn text="checkout" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Checkout;
