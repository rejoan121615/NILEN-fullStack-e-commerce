import React from "react";
import SectionTitle from "../../Ui/TitleText/SectionTitle";
import ProductImg from "../../../Assets/Images/products-img/product.jpg";
import ProductImg2 from "../../../Assets/Images/products-img/product2.jpg";

const ImageList = () => {
    const ImgList = [
        {
            img: ProductImg,
        },
        {
            img: ProductImg2,
        },
        {
            img: ProductImg,
        },
        {
            img: ProductImg2,
        },
        {
            img: ProductImg,
        },
        {
            img: ProductImg2,
        },
        {
            img: ProductImg,
        },
        {
            img: ProductImg2,
        },
        {
            img: ProductImg,
        },
        {
            img: ProductImg2,
        },
    ];

    return (
        <div className=" grid grid-cols-3">
            {ImgList.map((item, index) => {
                return (
                    <img
                        className=" aspect-square "
                        key={index}
                        src={item.img}
                        alt="instagram image"
                    />
                );
            })}
        </div>
    );
};

const InstagramTitle = () => {
    return (
        <aside className=" h-[250px] flex flex-col items-center justify-center ">
            <div>
                <SectionTitle>instagram</SectionTitle>
                <h4 className=" text-c-purple text-2xl ">@haanready</h4>
            </div>
        </aside>
    );
};

const Instagram = () => {
    return (
        <section className="  mt-20 lg:mt-32 xl:mt-40 2xl:mt-52 border-y ">
            <div className="">
                <InstagramTitle />
                <ImageList />
            </div>
        </section>
    );
};

export default Instagram;
