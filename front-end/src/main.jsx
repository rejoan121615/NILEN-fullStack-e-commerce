import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Store/Store";
// routes element
import ProtectedRoute from "./Components/Block/ProtectedRoute/ProtectedRoute";
import Home from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetailsPage";
import CheckOut from "./Pages/CheckoutPage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LogIn";
import ProfilePage from "./Pages/ProfilePage";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="product" element={<ProductDetails />} />
                        <Route path="login" element={<LoginPage />} />
                        <Route path="register" element={<RegisterPage />} />
                        <Route element={<ProtectedRoute />}>
                            <Route path="checkout" element={<CheckOut />} />
                            <Route path="profile" element={<ProfilePage />} />
                        </Route>
                        <Route
                            path="*"
                            element={
                                <h1 className=" text-center my-20 text-6xl ">
                                    Page not found
                                </h1>
                            }
                        />
                    </Route>
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);
