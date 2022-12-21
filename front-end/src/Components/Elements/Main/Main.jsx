import React from "react";
import Haan from "../../../Assets/Images/main_Haan_senitaizers.webp";
import SectionTitle from "../../Ui/TitleText/SectionTitle";
import RedBtn from "../../Ui/Buttons/CircleBtn";
import { HiOutlineCalendar } from "react-icons/hi";
import { MdOutlineLocalShipping } from "react-icons/md";
import { CgBox } from "react-icons/cg";

const RightSideImg = () => {
    return (
        <div className="[grid-are:img] lg:col-span-7 lg:row-span-2 xl:border-l mxl:border-x">
            <img
                className=" inline-block aspect-square w-full "
                src={Haan}
                alt="product image"
            />
        </div>
    );
};

const LeftTexts = () => {
    return (
        <div className="[grid-area:text] lg:col-span-5">
            <div className=" w-full h-full center xl:grid xl:grid-cols-5 ">
                <div className=" xl:col-start-2 xl:col-end-5 xl:col-span-4 ">
                    <SectionTitle>Haan</SectionTitle>
                    <SectionTitle>Sanitaizers</SectionTitle>
                    <h6 className=" font-medium mt-2 text-base lg:text-lg xl:text-xl 2xl:text-2xl  ">
                        Turning care around
                    </h6>
                    <div className=" text-right mt-5 xl:text-right xl:mt-16 ">
                        <RedBtn text="go to catalog" />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ShopFeatures = () => {
    const Maindiv = [
        {
            Icon: HiOutlineCalendar,
            text: ["3-5 working", "days delivery"],
            iconSize: " text-xl xl:text-3xl ",
            className: " col-start-2 lg:col-start-1 2xl:col-start-2",
        },
        {
            Icon: MdOutlineLocalShipping,
            text: ["Free shipping", "inside dhaka"],
            iconSize: " text-xl xl:text-3xl ",
            className: " ",
        },
        {
            Icon: CgBox,
            text: ["All over", "Bangladesh"],
            iconSize: " text-xl xl:text-3xl ",
            className: " ",
        },
    ];
    return (
        <div
            className=" border-t [grid-area:feat] lg:col-span-5 grid 
        grid-cols-[1fr_repeat(3,2fr)_1fr] md:grid-cols-[1fr_repeat(3,1fr)_1fr]
         lg:grid-cols-3 2xl:grid-cols-[1fr_repeat(3,160px)_1fr] "
        >
            {Maindiv.map((item, index) => {
                return (
                    <div
                        key={index}
                        className={` border-r last:border-r-0 px-4 py-3
                     lg:flex lg:flex-col lg:justify-center 2xl:last:border-r 2xl:first:border-l 2xl:px-5 2xl:py-5
                     ${item.className} `}
                    >
                        <div className=" w-10 h-10 rounded-full border center xl:w-14 xl:h-14 ">
                            <item.Icon className={item.iconSize} />
                        </div>
                        <div>
                            <p className=" mt-3 text-sm xl:text-base">
                                {item.text[0]}
                            </p>
                            <p className=" text-sm xl:text-base">
                                {item.text[1]}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

const Main = () => {
    return (
        <section className="border-b-2">
            <div className=" max-w-max-boundry mx-auto ">
                <div
                    className=" grid [grid-template:_'img'_1fr_'text'_400px_'feat'_auto/1fr] 
                sm:[grid-template:_'text_img'_1fr_'feat_feat'_auto/1fr_1fr]
                 lg:grid-cols-12 lg:grid-rows-[1fr_auto] mxl:border-l "
                >
                    {/* right square image  */}
                    <RightSideImg />
                    {/* left texts  */}
                    <LeftTexts />
                    {/* shop feature  */}
                    <ShopFeatures />
                </div>
            </div>
        </section>
    );
};

export default Main;
