import React from "react";
import ProductImg from "../../../Assets/Images/products-img/product.jpg";
import CheckoutProduct from "./CheckoutProduct";

const ProductList = () => {
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
        <div className=" xl:col-start-1 xl:col-span-7">
            {ProductList.map((pro, index) => {
                return (
                  <CheckoutProduct
                    key={index}
                        title={pro.title}
                        type={pro.type}
                        img={pro.img}
                        price={pro.price}
                        count={pro.count}
                    />
                );
            })}
        </div>
    );
};

export default ProductList;
