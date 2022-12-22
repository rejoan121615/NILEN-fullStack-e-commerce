import React from "react";

const Product = ({ title, price, img, type, className, items }) => {
    return (
        <div className={`${className}`}>
            <img className=" aspect-square" src={img} alt="Product image" />
            {title || type || price ? (
                <div className={`flex items-start justify-between border-t px-4 py-2 sm:py-3 xl:py-3 xl:px-5 ${items ? " xl:pb-7" : ""}  `}>
                    <div>
                        <p className={true ? " capitalize" : ""}>{title}</p>
                        <p>{type}</p>
                    </div>
                    <p>
                        {price ? price + "$" : null}{" "}
                        {items ? items + " pcs" : null}
                    </p>
                </div>
            ) : null}
        </div>
    );
};

export default Product;
