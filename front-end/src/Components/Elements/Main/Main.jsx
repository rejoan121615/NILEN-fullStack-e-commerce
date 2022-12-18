import React from "react";
import Haan from "../../../Assets/Images/main_Haan_senitaizers.webp";
import SectionTitle from "../../Ui/TitleText/SectionTitle";
import RedBtn from "../../Ui/Buttons/PurpleBtn";

const RightSideImg = () => {
    return (
        <div className=" sm:col-[2/-1] sm:row-[1/-1] lg:border-l  ">
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
        <div className=" sm:row-[1/2] sm:col-[1/2] center   ">
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
    return (
        <div
            className=" bg-black w-full h-full opacity-30
               sm:row-[2/-1] sm:col-[1/2]"
        ></div>
    );
};

const Main = () => {
    return (
        <section className="border-b-2">
            <div
                className="contianer grid grid-cols-1 grid-rows-[1fr_minmax(300px,400px)_100px]
                 sm:grid-cols-2 sm:grid-rows-[1fr_100px] lg:grid-cols-[5fr_7fr]  "
            >
                {/* right square image  */}
                <RightSideImg />
                {/* left texts  */}
                <LeftTexts />
                {/* shop feature  */}
                <ShopFeatures />
            </div>
        </section>
    );
};

export default Main;
