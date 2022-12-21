import React from "react";
import withSectionWrap from "../../HOC/withSectionWrap";
import AboutUsImg from "../../../Assets/Images/about-us.jpg";
import CircleBtn from "../../Ui/Buttons/CircleBtn";

const Description = () => {
    return (
        <div
            className=" p-5 xs:p-10 md:p-4 md:border-l lg:col-span-3 lg:p-14
         xl:flex xl:col-start-5 xl:col-end-[-2] xl:border-r xl:items-center 2xl:pl-20  "
        >
            <div className=" xl:w-4/6">
                <p className=" font-semibold ">
                    We want to challenge the personal care industry with a
                    desruptive approach that puts the people and the planet in
                    the center of the equalition. Let's Make it more fun for
                    you, more giving to society and more respectful with our
                    planet!
                </p>
                <p className=" font-semibold mt-4 xl:mt-10 hidden 2xl:block 2xl:mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                </p>
                <p className=" font-semibold mt-4 xl:mt-10  2xl:mt-6">
                    "Our goal is to make products of such cool design that
                    customers prefer to refill and reuse their packaging rather
                    than throwing them away to buy new ones" - Eric and Hugo,
                    cofounder of HAAN
                </p>
                <p className=" font-semibold mt-4 xl:mt-10 hidden 2xl:block 2xl:mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </p>
            </div>
            <div className=" mt-5 xl:w-2/6 text-center ">
                <CircleBtn text="Visite" />
            </div>
        </div>
    );
};

const AboutUs = () => {
    return (
        <div>
            <div
                className=" border-x md:grid md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-cus-12 xl:border-x-0
             2xl:grid-cols-12 "
            >
                <div className=" lg:col-start-1 lg:col-span-2 xl:col-span-4 ">
                    <img
                        className=" aspect-square sm:aspect-auto sm:h-full"
                        src={AboutUsImg}
                        alt="about us img"
                    />
                </div>
                <Description />
            </div>
        </div>
    );
};

export default withSectionWrap(AboutUs, {
    boundry: true,
    title: "about us & our purpose",
});
