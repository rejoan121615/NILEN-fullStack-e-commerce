import React from "react";
import { useFormik } from "formik";
import { HiArrowLongRight } from "react-icons/hi2";
import {
    SlSocialInstagram,
    SlSocialFacebook,
    SlSocialYoutube,
    SlSocialLinkedin,
} from "react-icons/sl";

const NewsLatterAndSocial = (props) => {
    const socialLinks = [
        {
            Element: SlSocialInstagram,
            link: "",
            className: " text-[20px] lg:text-[25px] ",
        },
        {
            Element: SlSocialFacebook,
            link: "",
            className: " text-[22px] lg:text-[28px] ",
        },
        {
            Element: SlSocialYoutube,
            link: "",
            className: " text-[20px] lg:text-[25px] ",
        },
        {
            Element: SlSocialLinkedin,
            link: "",
            className: " text-[20px] lg:text-[25px] ",
        },
    ];

    const formik = useFormik({
        initialValues: {
            email: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div className={`${props.className}`}>
            <h6 className=" capitalize text-2xl mb-2">Sign up for updates</h6>
            {/* input form  */}
            <div className="  xl:mt-5 ">
                <form onSubmit={formik.handleSubmit} className=" relative ">
                    <input
                        className=" p-1 border-b w-full focus-visible:outline-none  "
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email address"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />

                    <button
                        className=" absolute right-0 bottom-0 "
                        type="submit"
                    >
                        <HiArrowLongRight className=" text-3xl " />
                    </button>
                </form>{" "}
            </div>
            {/* social links  */}
            <div className=" mt-6 xl:mt-8 ">
                {socialLinks.map((social, index) => {
                    return (
                        <a
                            href={social.link}
                            className=" inline-block mr-2 md:mr-4"
                        >
                            <div
                                key={index}
                          className=" w-10 h-10 center border-[2px] rounded-full
                                 lg:w-14 lg:h-14 "
                            >
                                <social.Element
                                    className={`${social.className}`}
                                />
                            </div>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default NewsLatterAndSocial;
