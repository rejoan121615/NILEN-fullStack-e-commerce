import React from "react";
import withSectionWrap from "../../HOC/withSectionWrap";
import CircleBtn from "../../Ui/Buttons/CircleBtn";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductImg from "../../../Assets/Images/products-img/product2.jpg";
import ProductImg2 from "../../../Assets/Images/products-img/product.jpg";
import Product from "../../Block/Product/Product";
import "swiper/css";
import { AiFillPropertySafety } from "react-icons/ai";

const ProductsLinkCard = (props) => {
    return (
        <div
            className={`${props.className} flex items-center justify-center xl:justify-start `}
        >
            <div>
                <p
                    className=" uppercase text-xl xs:text-2xl xs:w-[200px] sm:w-2/2 md:text-3xl 
                md:w-[250px] lg:w-[300px] "
                >
                    A splash of fresh moisture
                </p>
                <div className=" text-center mt-4 sm:mt-8 xl:text-left xl:mt-8 2xl:mt-12">
                    <CircleBtn text="see all" />
                </div>
            </div>
        </div>
    );
};

const ProductSlider = () => {
    const newList = [
        {
            title: "Simple products",
            type: "Shampoo",
            price: 225,
            img: ProductImg,
        },
        {
            title: "Simple products",
            type: "Shampoo",
            price: 225,
            img: ProductImg,
        },
        {
            title: "Simple products",
            type: "Shampoo",
            price: 225,
            img: ProductImg,
        },
        {
            title: "Simple products",
            type: "Shampoo",
            price: 225,
            img: ProductImg,
        },
    ];

    return (
        <Swiper
            breakpoints={{
                320: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2.2,
                },
            }}
            spaceBetween={0}
            slidesPerView={1}
        >
            {newList.map((item, index) => {
                return (
                    <SwiperSlide
                        key={index}
                        className=" border-b border-x-[1px] sm:border-b-0 "
                    >
                        <Product {...item} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

const NewProducts = () => {
    return (
        <div>
            <div className=" max-boundry">
                <div
                    className=" grid grid-cols-1 grid-rows-[1fr_300px] sm:grid-cols-2 sm:grid-rows-1
        lg:grid-cols-3 xl:grid-cols-cus-12 2xl:grid-cols-12 "
                >
                    <div
                        className=" border-x-[1px] sm:col-start-2 lg:col-span-2 
                        xl:border-r-0 xl:col-start-5 xl:col-span-8"
                    >
                        <ProductSlider />
                    </div>
                    <ProductsLinkCard
                        className=" sm:col-start-1 sm:row-start-1
                      xl:col-start-2 xl:col-span-3 "
                    />
                </div>
            </div>
        </div>
    );
};

export default withSectionWrap(NewProducts, {
    slider: false,
    title: "new products",
    boundry: true,
});
