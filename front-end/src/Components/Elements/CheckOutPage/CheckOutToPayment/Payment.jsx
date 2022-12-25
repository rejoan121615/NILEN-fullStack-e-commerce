import React from "react";
import { inputStyle } from "./Contact";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { SiAmericanexpress } from "react-icons/si";

const Payment = () => {
    return (
        <div>
            <form>
                <div className=" flex items-center justify-between py-8">
                    <p>Payment method</p>
                </div>
                <div className=" w-full flex flex-col gap-y-6 mt-6">
                    <div className=" flex items-center  justify-between ">
                        <div className=" flex items-center gap-x-3 ">
                            <input
                                type="radio"
                                defaultChecked
                                className=" w-4 h-4"
                                name="paymentMethod"
                            />{" "}
                            Cradit Card
                        </div>
                        <div className=" flex items-center gap-x-2">
                            <FaCcVisa className=" text-4xl " />
                            <FaCcMastercard className=" text-4xl " />
                            <SiAmericanexpress className=" text-[28px] rounded-sm " />
                        </div>
                    </div>
                    <input
                        type="number"
                        name="streetAddress"
                        placeholder="xxxx xxxx xxxx xxxx"
                        className={
                            inputStyle + " uppercase placeholder:uppercase "
                        }
                    />
                    <div className=" grid grid-cols-2 gap-x-7 ">
                        <input
                            type="month"
                            name="cardExpDate"
                            placeholder="Month Year"
                            className={inputStyle}
                        />
                        <input
                            type="text"
                            name="cvv"
                            className={inputStyle}
                            placeholder="CVV"
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Payment;
