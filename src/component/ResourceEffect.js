import React, { useEffect, useState } from 'react';


export default function ResourceEffect(){
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const handleResize = () => {
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    },[])

    return(
        <React.Fragment>
            <div>
                <span>Width: {windowWidth}</span>
                <br></br>
                <span>Height: {windowHeight}</span>
            </div>
        </React.Fragment>
    )
}