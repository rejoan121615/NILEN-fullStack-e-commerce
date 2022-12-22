import React, { useRef } from "react";
import Slider from "./Slider";
import Details from "./Details/Details";
import Description from "./Details/Description";
import ProductInstruction from "./Details/ProductInstruction";

const ProductDescription = () => {
    return (
        <section>
            <div
                className=" md:grid md:grid-cols-2 lg:grid-cols-[560px_1fr] lg:grid-rows-3 
        xl:[grid-template:_'slider_det_det'_1.3fr_'slider_des_pro'_1fr_/_450px_1fr_1.2fr] xl:border-b
        2xl:[grid-template:_'slider_det_det'_1.3fr_'slider_des_pro'_1fr_/_550px_1fr_1.2fr]   "
            >
                <Slider className=" lg:row-span-3 xl:[grid-area:slider]  " />
                <Details className="  xl:[grid-area:det] xl:p-10 " />
                <Description className=" lg:grid-cols-2 lg:grid-rows-2 xl:[grid-area:des] xl:border-t xl:border-r xl:p-10 " />
                <ProductInstruction className=" xl:[grid-area:pro] xl:border-t xl:p-10 " />
            </div>
        </section>
    );
};

export default ProductDescription;
