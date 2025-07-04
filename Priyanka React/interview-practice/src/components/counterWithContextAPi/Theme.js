import React, { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeToggle';
import { Button } from '@mui/material';
import "./index.css";

const Theme = () => {
    const {theme, setTheme} = useContext(ThemeContext);

    const themeHandler = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    return (
        <div className={theme === 'dark' ? 'dark-theme' : ''}>
            <Button variant='contained' onClick={() => themeHandler()}>
                {theme === 'dark' ? 'Light Theme' : 'Dark Theme'}
            </Button>
            <p>i am a theme toggle</p>
        </div>
    )
}

export default Theme