import { useState } from "react";
import Header from "./Components/Elements/Header/Header";
import Footer from "./Components/Elements/Footer/Footer";

function App() {
    const [name, setName] = useState();

    return (
        <div className="App prose ">
            <Header />

            <Footer />
        </div>
    );
}

export default App;
