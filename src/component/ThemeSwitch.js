import React, { useMemo, useState } from 'react';

export default function ThemeSwitch(){
    const [theme, setTheme] = useState(0);
    const [number, setNumber] = useState(false);
    const doubleNum = useMemo(() => {
        return slowMotion(number)
    },[number])
    
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: theme ? 'green' : 'red',
            color: theme ? 'white' : 'black'
        }
    }, [theme])

    return (
        <>
            <input type="number" value={number} onChange = {e => setNumber(parseInt(e.target.value))} />
            <button onClick = {() => setTheme(prevTheme => !prevTheme)}>Change Theme</button>
            <div style = {themeStyles}>{doubleNum}</div>
        </>
    )
}



const slowMotion = num => {
    for(let i = 0; i <= 1000000000; i++){}
    return num * 2
}