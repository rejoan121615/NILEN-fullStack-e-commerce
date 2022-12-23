import React from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsPerson } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import Classess from "./Header.module.css";

const Header = () => {
    const Links = [{}];

    return (
        <header className=" border-b xl:h-[90px] 2xl:h-[100px] ">
            <div className=" max-w-max-boundry mx-auto xl:h-full">
                <nav className=" grid grid-cols-[100px_1fr_50px_50px] 
                lg:grid-cols-[repeat(5,1fr)_2fr_repeat(5,1fr)] justify-between mxl:border-x xl:h-full ">
                    <div className=" lg:border-r">
                        <button
                            className={` p-3 lg:py-6 capitalize
                    flex items-center justify-center
                    h-full center lg:w-full `}
                        >
                            <RxHamburgerMenu className=" text-xl sm:text-2xl md:text-3xl text-black xl:text-4xl " />
                        </button>
                    </div>

                    <Link
                        to="/"
                        className="w-full flex items-center justify-center h-full
                              text-xl  lg:col-start-6
                               sm:text-2xl md:text-3xl lg:border-x xl:text-4xl 2xl:text-5xl "
                    >
                        NILEN
                    </Link>

                    {/* user area  */}
                    <div className=" col-start-3 col-end-5 grid grid-cols-2 lg:col-start-10 lg:col-end-12 ">
                        <Link
                            to="/profile"
                            className={` py-2 lg:py-6 capitalize 
                                flex items-center justify-center
                                lg:border-l h-full `}
                        >
                            <BsPerson className=" text-xl sm:text-2xl text-black xl:text-3xl " />
                        </Link>
                        <Link
                            to="/checkout"
                            className={`  py-2 lg:py-6 capitalize 
                    flex items-center justify-center
                    lg:border-l h-full `}
                        >
                            <HiOutlineShoppingBag className=" text-xl sm:text-2xl text-black xl:text-3xl " />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;

// font-family: 'DM Sans', sans-serif;
// font-family: 'Open Sans', sans-serif;
