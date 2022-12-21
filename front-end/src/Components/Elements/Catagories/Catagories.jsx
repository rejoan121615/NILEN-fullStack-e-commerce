import React from "react";
import withSectionWrap from "../../HOC/withSectionWrap";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../Product/Product";
import CatagoryImg from "../../../Assets/Images/products-img/product.jpg";
import CircleBtn from "../../Ui/Buttons/CircleBtn";

const SeeAllProducts = () => {
    return (
        <div className=" p-4 flex flex-col items-center justify-center sm:border-r-[1px] ">
            <p className=" font-semibold w-2/3">
                All collections that will remind you of defferent times of the
                day.
            </p>
            <div className=" mt-5 ">
                <CircleBtn type="purple" text="see all products" />
            </div>
        </div>
    );
};

const CatagoryComponent = () => {
    const CatagoryList = [
        {
            title: "best sellers",
            items: 24,
            img: CatagoryImg,
        },
        {
            title: "hand sanitizer",
            items: 30,
            img: CatagoryImg,
        },
        {
            title: "hand cream",
            items: 4,
            img: CatagoryImg,
        },
        {
            title: "hand soap",
            items: 3,
            img: CatagoryImg,
        },
        {
            title: "toothpaste",
            items: 4,
            img: CatagoryImg,
        },
        {
            title: "refills",
            items: 28,
            img: CatagoryImg,
        },
        {
            title: "combos",
            items: 25,
            img: CatagoryImg,
        },
    ];

    return (
        <div
            className=" w-full grid grid-cols-1 grid-rows-[repeat(7,1fr)_400px]
         gap-y-8 sm:grid-cols-2 sm:grid-rows-[repeat(4,1fr)] sm:gap-y-0 "
        >
            {CatagoryList.map((catagory, index) => {
                return (
                    <Product
                        key={index}
                        img={catagory.img}
                        title={catagory.title}
                        items={catagory.items}
                        className={` border-b sm:border-x-[1px] ${
                            index === 6 ? " sm:border-b-0 sm:border-r  " : ""
                        } `}
                    />
                );
            })}
            <SeeAllProducts />
        </div>
    );
};

const Catagories = () => {
    return (
        <Swiper slidesPerView={1}>
            <SwiperSlide>
                <CatagoryComponent />
            </SwiperSlide>
        </Swiper>
    );
};

export default withSectionWrap(Catagories, {
    title: "Catagories",
    slider: true,
});
