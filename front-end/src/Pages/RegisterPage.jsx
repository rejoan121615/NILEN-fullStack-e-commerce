import React from "react";
import { Formik } from "formik";
import SquareBtn from "../Components/Ui/Buttons/SquareBtn";
import { Link } from "react-router-dom";


const RegisterPage = () => {

    return (
        <section className=" my-[100px] ">
            <div className=" container mx-auto ">
                <form className=" max-w-xl p-10 border-[1px] border-stone-400 rounded-xl mx-auto ">
                    <div>
                        <p>Create an account</p>
                    </div>
                    <div className=" flex flex-col gap-y-5 mt-6 ">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="input normal-case "
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input normal-case "
                        />
                        <div className=" grid grid-cols-2 gap-x-4 ">
                            <input
                                type="password"
                                name="password_1"
                                placeholder="Password"
                                className="input normal-case "
                            />
                            <input
                                type="password"
                                name="password_1"
                                placeholder="Password"
                                className="input normal-case "
                            />
                        </div>
                    </div>
                    <div className=" flex items-center justify-between my-6 ">
                        <p>Already have and account? </p>
                        <Link className=" font-semibold underline" to="/login">
                            Log in
                        </Link>
                    </div>
                    <div className=" mt-10 ">
                        <button className=" square-btn--red"></button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default RegisterPage;
