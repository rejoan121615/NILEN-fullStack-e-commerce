import React, { useEffect, useState } from "react";
import withSectionWrap from "../../HOC/withSectionWrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductImg from "../../../Assets/Images/products-img/product.jpg";
import Product from "../Product/Product";

const BestSellers = (props) => {
    const productData = [
        {
            title: "Gentle Paloma + Regill PA ",
            price: 250,
            img: ProductImg,
            type: "Hand Sanitizer",
        },
        {
            title: "5 Pack Mix Fragrances BE",
            price: 2059,
            img: ProductImg,
            type: "Hand Sanitizer",
        },
        {
            title: "Coco Cooler + Refill CC ",
            price: 20,
            img: ProductImg,
            type: "Hand Cream",
        },
        {
            title: "Margarita Spirit",
            price: 23,
            img: ProductImg,
            type: "Hand Soap",
        },
        {
            title: "5 Pack Mix Fragrances BE",
            price: 2059,
            img: ProductImg,
            type: "Hand Sanitizer",
        },
        {
            title: "Coco Cooler + Refill CC ",
            price: 20,
            img: ProductImg,
            type: "Hand Cream",
        },
        {
            title: "Margarita Spirit",
            price: 23,
            img: ProductImg,
            type: "Hand Soap",
        },
    ];

    return (
        <Swiper
            modules={[Navigation]}
            onInit={(swiper) => {
                swiper.params.navigation.prevEl = props?.nextBtn?.current;
                swiper.params.navigation.nextEl = props?.prevBtn?.current;
                swiper.navigation.init();
                swiper.navigation.update();
            }}
            spaceBetween={0}
            slidesPerView={3}
            breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
            }}
            loop={true}
        >
            {productData.map((item, index) => {
                return (
                    <SwiperSlide key={index} className=" ">
                        <Product className=" border-x-[1px] " {...item} />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default withSectionWrap(BestSellers, {
    title: "best sellers",
    slider: true,
});
