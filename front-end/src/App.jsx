import { useState } from "react";
import Header from "./Components/Elements/Header/Header";
import Main from "./Components/Elements/Main/Main";
import Footer from "./Components/Elements/Footer/Footer";

function App() {
    const [name, setName] = useState();

    return (
        <div className="App prose ">
            <Header />
            <Main/>
            <Footer />
        </div>
    );
}

export default App;
