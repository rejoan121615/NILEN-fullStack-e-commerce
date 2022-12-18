import React from "react";
import Haan from "../../../Assets/Images/main_Haan_senitaizers.webp";

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
                    <div className="">
                        <h1 className="flex flex-col display-1 ">
                            <span className="">Haan</span>
                            <span className="">Sanitaizers</span>
                        </h1>
                        <p>Turning care around</p>
                    </div>
                </div>
                {/* shop feature  */}
                <div
                    className=" bg-black w-full h-full opacity-30
               sm:row-[2/-1] sm:col-[1/2]"
                >
                    <div className="border-l-2"></div>
                    <div className="border-l-2">
                        <p>3-5 working days delivery</p>
                    </div>
                    <div>
                        <p>Free shipping over 35C</p>
                    </div>
                    <div>
                        <p>Within all Europe</p>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Main;
