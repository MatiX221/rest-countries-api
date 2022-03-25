import React from "react";
import Moon from "./svg/Moon";
import Sun from "./svg/Sun";

const Header = ({ theme, onclick, homePage }: any) => {
    return (
        <header className="container__header">
            <h1 onClick={homePage}>Where in the world?</h1>
            <div className="container__themeChanger">
                <div className="changeTheme" onClick={onclick}>
                    <div className="holder__image">{theme === "light" ? <Moon></Moon> : <Sun></Sun>}</div>
                    <div className="holder__text">{theme === "light" ? "Dark Mode" : "Light Mode"}</div>
                </div>
            </div>
        </header>
    );
};

export default Header;
