import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import "./Contact.css";

export const inputStyle = `w-full capitalize font-semibold border-b border-c-ash 
                    placeholder:text-c-ash placeholder:font-normal text-c-ash px-2
                     py-1 focus-visible:outline-none `;

const Contact = () => {
    const contactForm = useFormik({
        initialValues: {
            type: "",
            name: "",
            email: "",
            phoneNumber: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <div>
            <form>
                <div className=" flex items-center justify-between py-8">
                    <p>I'm a new customer</p>
                    <p>Already have an account</p>
                </div>
                <div className=" w-full flex flex-col gap-y-6 mt-6">
                    <input
                        type="text"
                        name="name"
                        placeholder="first name"
                        className={inputStyle}
                        value={contactForm.values.name}
                        onChange={contactForm.handleChange}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={inputStyle}
                        value={contactForm.values.email}
                        onChange={contactForm.handleChange}
                    />
                    <input
                        type="number"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className={inputStyle}
                        value={contactForm.values.phoneNumber}
                        onChange={contactForm.handleChange}
                    />
                </div>
            </form>
        </div>
    );
};

export default Contact;
