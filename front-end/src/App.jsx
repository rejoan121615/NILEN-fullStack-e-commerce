import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Block/Header/Header";
import Footer from "./Components/Block/Footer/Footer";
// routes
import Home from "./Pages/HomePage";

function App() {
    return (
        <div className="App prose ">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default App;
