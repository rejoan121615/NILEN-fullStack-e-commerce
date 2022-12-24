import React from "react";
import SectionTitle from "../../Ui/TitleText/SectionTitle";
import Total from "./Total";
import CheckOutAction from "./CheckOutAction";
import ProductsList from "./ProductList";
import CheckOutToPayment from "./CheckOutToPayment/CheckOutToPayment";

const Checkout = () => {
    return (
        <section>
            <div className=" max-w-max-boundry mx-auto xl:grid xl:grid-cols-12  ">
                <CheckOutToPayment />
                <div
                    className=" xl:col-start-6 xl:col-span-7 xl:border-l xl:grid xl:grid-cols-7 xl:border-b 
                 xl:bg-white  "
                >
                    <div className=" px-3 py-2 xl:hidden ">
                        <h1 className=" text-c-40 uppercase ">cart</h1>
                    </div>
                    {/* product lists  */}
                    <ProductsList />
                    {/* total calculation  */}
                    <Total />
                    {/* checkout button  */}
                    <CheckOutAction />
                </div>
            </div>
        </section>
    );
};

export default Checkout;
