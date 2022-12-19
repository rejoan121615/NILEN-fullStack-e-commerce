import React from "react";

const Product = ({ title, price, img, type, className }) => {
    return (
        <div className={className}>
            <img className=" aspect-square" src={img} alt="Product image" />
            <div className=" flex items-start justify-between border-t px-4 py-2 sm:py-3 xl:py-3 xl:px-5  ">
                <div>
                    <p>{title}</p>
                    <p>{type}</p>
                </div>
                <p>{price} $</p>
            </div>
        </div>
    );
};

export default Product;
