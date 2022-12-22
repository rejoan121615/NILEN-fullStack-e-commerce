import React from "react";
import NewsLatterAndSocial from "../../Ui/NewsLatterAndSocial/NewsLatterAndSocial";
import FooterLists from "./FooterLists";

const Footer = () => {
    const FooterData = [
        {
            title: "catalog",
            child: [
                {
                    title: "Best Seelers",
                    url: "best-seelers",
                },
                {
                    title: "hand sanitizer",
                    url: "hand-sanitizer",
                },
                {
                    title: "hand cream",
                    url: "hand-cream",
                },
                {
                    title: "hand sanitizer",
                    url: "hand-soap",
                },
                {
                    title: "Toothpaste",
                    url: "toothpaste",
                },
                {
                    title: "refills",
                    url: "refills",
                },
                {
                    title: "combos",
                    url: "combos",
                },
            ],
        },
        {
            title: "customer info",
            child: [
                {
                    title: "About us & our purpose",
                    url: "about-us-&-our-purpose",
                },
                {
                    title: "stockist",
                    url: "stockist",
                },
                {
                    title: "journal",
                    url: "journal",
                },
                {
                    title: "faqs",
                    url: "faqs",
                },
                {
                    title: "contact",
                    url: "contact",
                },
                {
                    title: "For Business",
                    url: "for-business",
                },
            ],
        },
        {
            title: "Legal Pages",
            child: [
                {
                    title: "deliveries & returns",
                    url: "deliveries-&-returns",
                },
                {
                    title: "terms & conditions",
                    url: "terms-&-conditions",
                },
                {
                    title: "refund policy",
                    url: "refund-policy",
                },
                {
                    title: "privacy policy",
                    url: "privacy-policy",
                },
            ],
        },
    ];

    return (
        <footer>
            <div className=" py-20 px-3">
                {/* footer list  */}
                <div
                    className=" grid grid-cols-1 gap-y-5 sm:grid-cols-2 
                lg:grid-cols-9 lg:container xl:grid-cols-[200px_250px_200px_1fr] 2xl:grid-cols-[220px_280px_220px_1fr]   "
                >
                    {FooterData.map((list, index) => {
                        return (
                            <FooterLists
                                className=" lg:col-span-2 xl:col-span-1 "
                                key={index}
                                {...list}
                            />
                        );
                    })}
                    <NewsLatterAndSocial
                        className=" mt-4 lg:mt-0 lg:col-span-3
                     lg:max-w-[350px] lg:w-full xl:col-span-1 xl:justify-self-end   "
                    />
                </div>
            </div>
            {/* footer texts  */}
            <div
                className=" text-center py-3 border-t-[1px] border-stone-500 
             border-opacity-50 "
            >
                <p className=" text-c-ash opacity-60 ">
                    Developed By Mohd Rejoan
                </p>
            </div>
        </footer>
    );
};

export default Footer;
