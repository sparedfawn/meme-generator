import React from "react";

import Header from "./components/Header";
import Meme from "./components/Meme";

const App: React.FC = () => {
    return (
        <div className="content">
            <div className="app">
                <Header />
                <Meme />
            </div>
        </div>
    );
}

export default App;
