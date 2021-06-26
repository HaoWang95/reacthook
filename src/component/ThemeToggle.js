import React, { useContext } from 'react';
import { ThemeContext } from '../App';

export default function ThemeToggle(){

    const darkTheme = useContext(ThemeContext)

    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
        color: darkTheme ? '#ccc' : '#333',
        padding: '2rem', 
        margin:'2rem'
    }

    return (
        <React.Fragment>
            <div style = {themeStyles}>Function Theme</div>
        </React.Fragment>
    )
}