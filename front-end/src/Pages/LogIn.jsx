import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { AuthAction } from "../Store/Authentication";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const loggedIn = useSelector((state) => state.auth.loggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    // input submit handler
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(AuthAction.logIn());
        if (location.state?.from) {
            navigate(location.state.from);
        }
    };

    return (
        <section className=" my-[100px] ">
            <div className=" container mx-auto ">
                <form
                    className=" max-w-xl p-10 border-[1px] border-stone-400 rounded-xl mx-auto "
                    onSubmit={submitHandler}
                >
                    <div>
                        <p>Logged In Yourself</p>
                    </div>
                    <div className=" flex flex-col gap-y-5 mt-6 ">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input normal-case "
                        />
                        <input
                            type="password"
                            name="password_1"
                            placeholder="Password"
                            className="input normal-case "
                        />
                    </div>
                    <div className=" flex items-center justify-between my-6 ">
                        <p>Are you a new user? </p>
                        <Link
                            className=" font-semibold underline"
                            to="/register"
                        >
                            Create a account
                        </Link>
                    </div>
                    <div className=" mt-10 ">
                        <button className=" square-btn--red">submit</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Login;
