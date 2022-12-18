import React from "react";
import Haan from "../../../Assets/Images/main_Haan_senitaizers.webp";
import SectionTitle from "../../Ui/TitleText/SectionTitle";
import RedBtn from "../../Ui/Buttons/RedBtn";

const Main = () => {
    return (
        <section className="border-b-2">
            <div
                className="contianer grid grid-cols-1 grid-rows-[1fr_0.5fr_100px] sm:grid-cols-2
            sm:grid-rows-[1fr_100px] lg:grid-cols-[5fr_7fr]  "
            >
                {/* right square image  */}
                <div className=" sm:col-[2/-1] sm:row-[1/-1] lg:border-l  ">
                    <img
                        className=" inline-block aspect-square w-full "
                        src={Haan}
                        alt="product image"
                    />
                </div>
                {/* left texts  */}
                <div className=" sm:row-[1/2] sm:col-[1/2] center   ">
                    <div className=" w-full h-full center xl:grid xl:grid-cols-5 ">
                        <div className=" xl:col-start-2 xl:col-span-5 ">
                            <SectionTitle>Haan</SectionTitle>
                            <SectionTitle>Sanitaizers</SectionTitle>
                            <h6 className=" font-medium mt-2 text-base lg:text-lg xl:text-xl 2xl:text-2xl  ">Turning care around</h6>
                            <div>
                                <RedBtn text="go to catalog" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* shop feature  */}
                <div
                    className=" bg-black w-full h-full opacity-30
               sm:row-[2/-1] sm:col-[1/2] "
                >
                    <div>
                        <p>3-5 working days delivery</p>
                    </div>
                    <div>
                        <p>Free shipping over 35C</p>
                    </div>
                    <div>
                        <p>Within all Europe</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
