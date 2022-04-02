import React from "react";

import Logo from "../images/tf.svg";

const Header: React.FC = () => {
    return (
        <header className="header">
            <img src={Logo} className="header-logo" />
            <h2 className="header-title">Meme Generator</h2>
            <p className="header-project">React project - Typescipt </p>
        </header>
    );
};

export default Header;
