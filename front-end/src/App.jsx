import { useState } from "react";
import { Outlet } from 'react-router-dom'
import Header from "./Components/Elements/Header/Header";
import Footer from "./Components/Elements/Footer/Footer";
// routes 
import Home from "./Pages/Home";

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
