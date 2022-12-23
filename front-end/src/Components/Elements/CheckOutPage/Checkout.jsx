import React from "react";
import CheckoutProduct from "./CheckoutProduct";
import SectionTitle from "../../Ui/TitleText/SectionTitle";
import ProductImg from "../../../Assets/Images/products-img/product.jpg";

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
            <div>
                <SectionTitle className=" my-5">cart</SectionTitle>
                {/* product lists  */}
                <div>
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
                <div>
                    
                </div>
            </div>
        </section>
    );
};

export default Checkout;
