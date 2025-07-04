import React, { useState } from 'react';
import "./index.css";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("light");

    const buttonClicked = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }
    return (
        <div className={theme === "light" ? "dark" : "light"}>
            <button onClick={buttonClicked}>
                {theme === 'light' ? 'Dark Mode On' : 'Light Mode On'}
            </button>
            <h1>Theme Change</h1>
        </div>
    )
}

export default ThemeToggle