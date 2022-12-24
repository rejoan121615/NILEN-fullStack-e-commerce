import React, { useEffect, useState } from "react";
import * as country from "pangnote-cities";
import { inputStyle } from "./Contact";

const Shipping = () => {
    const [cityOption, setCityOption] = useState([]);

    useEffect(() => {
        const genCity = country.getCities("bangladesh");
        const cityObj = [];
        genCity.map((item, index) => {
            cityObj.push({ value: item.toLowerCase(), label: item });
        });
        setCityOption(cityObj);
    }, []);
    return (
        <div>
            <form>
                <div className=" flex items-center justify-between py-8">
                    <p>Shipping address</p>
                </div>
                <div className=" w-full flex flex-col gap-y-6 mt-6">
                    <div>
                        <select className={inputStyle} name="" id="">
                            {cityOption.map((item, index) => {
                                return (
                                    <option value={item.value}>
                                        {item.label}
                                    </option>
                                );
                            })}
                        </select>
                    </div>
                    <input
                        type="text"
                        name="streetAddress"
                        placeholder="Street Address"
                        className={inputStyle}
                    />
                    <div className=" grid grid-cols-2 gap-x-7 ">
                        <input
                            type="text"
                            name="aptSuit"
                            placeholder="Apt/Suit"
                            className={inputStyle}
                        />
                        <input
                            type="text"
                            name="postalCode"
                            placeholder="Postal code"
                            className={inputStyle}
                        />
                    </div>
                    {/* shipping method  */}
                    <div className=" mt-3 ">
                        <p>Shipping method</p>
                        <div className=" flex flex-col gap-y-3 mt-5">
                            <div className=" flex items-center gap-x-3 ">
                                <input
                                    className=" cursor-pointer w-4 h-4 text-blue-600 bg-[red] border-[red] "
                                    type="radio"
                                    name="shipping"
                                />{" "}
                                <p>Inside Dhaka (1-2 working days)</p>
                            </div>
                            <div className=" flex items-center gap-x-3">
                                <input
                                    className=" cursor-pointer w-4 h-4 text-blue-600 bg-[red] border-[red] "
                                    type="radio"
                                    name="shipping"
                                />{" "}
                                <p>Outside Dhaka (2-3 working days)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Shipping;
