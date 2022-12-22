import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PostImg from "../../../../Assets/Images/products-img/product.jpg";
import PostImg2 from "../../../../Assets/Images/products-img/product2.jpg";
import { Navigation } from "swiper";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "swiper/css";

const Slider = (props) => {
    const slidesData = [PostImg, PostImg2, PostImg, PostImg2, PostImg];

    const leftSlideBtn = useRef();
    const rightSlideBtn = useRef();

    return (
        <div className={` ${props.className} relative xl:border-r `}>
            {/* slider button  */}
            <div className=" absolute z-20 right-0 bottom-0 xl:col-start-11 xl:justify-self-end ">
                <button ref={leftSlideBtn} className=" cursor-pointer mr-2 ">
                    <AiOutlineLeft className=" text-4xl " />
                </button>
                <button ref={rightSlideBtn} className=" cursor-pointer mr-2 ">
                    <AiOutlineRight className=" text-4xl " />
                </button>
            </div>
            {/* swiper slider  */}
            <Swiper
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = leftSlideBtn?.current;
                    swiper.params.navigation.nextEl = rightSlideBtn?.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={0}
            >
                {slidesData.map((img, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img
                                className=" aspect-[1/1.4] w-full "
                                src={img}
                                alt="product slider img"
                            />
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Slider;
