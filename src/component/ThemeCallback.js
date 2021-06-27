import React, { useEffect, useState, useCallback } from 'react';

const List = ({getItems}) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(getItems())
        console.log("List items are changed")
    },[getItems]);

    return (
        <ul>
            {items.map(item => <li key = {item}>{item}</li>)}
        </ul>
    )
}

export default function ThemeCallback(){
    const [inputNumber, setInputNumber] = useState(1);
    const [themeDark, setThemeDark] = useState(true);

    /**
     * If I code the getItems function directly, it will rerender or rerun the getItems function for each time
     * the theme changes, useCallback to bind the getItems so that it only runs when items changed.
     */
    const getItems = useCallback(() => {
        return [inputNumber, inputNumber+1, inputNumber+2]
    },[inputNumber])

    const theme = {
        backgroundColor: themeDark ? "#333" : "#FFF",
        color: themeDark ? "FFF" : "#333"
    }

    const updateInputNumber = (e) => {
        let newValue = parseInt(e.target.value);
        isNaN(newValue) ? setInputNumber(0) : setInputNumber(newValue);
    }

    return (
        <div style = {theme}>
            <input
                type = "number"
                value = {inputNumber}
                onChange = {e => updateInputNumber(e)}             
            />

            <button onClick = {() => setThemeDark(prevDark => !prevDark)}>change theme context</button>

            <List getItems = {getItems} />
        </div>
    )
}