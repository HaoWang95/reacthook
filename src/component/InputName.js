import React, { useEffect, useRef, useState } from 'react';


export default function InputName(){
    const [name, setName] = useState('');
    const renderCount = useRef(0);
    const prevName = useRef('')

    const inputRef = useRef();

    const focus = () => {
        console.log(inputRef.current);
        inputRef.current.focus()
    }

    useEffect(() =>{
        renderCount.current = renderCount.current + 1;
        prevName.current = name;
        return () => {}
    },[name])

    return(
        <>
            <input ref = {inputRef} value = {name} onChange = {e => setName(e.target.value)} />
            <div>The name is {name}, and it used to be {prevName.current}</div>
            <div>Time rendered {renderCount.current}</div>
            <button onClick = {focus}>Focus</button>
        </>
    )
}