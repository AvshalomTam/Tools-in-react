import React, { useState, useEffect } from 'react';

export default function UseEffect2() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    // in beginning - listen to the window width changes
    useEffect(() => {
        window.addEventListener('resize', handleResize)

        // cleanup code - the return is actually running before the addEventListener!
        // because it "cleans up" all the listeners that may be on "window" object and
        // then add it from the beginning so we dont readd eventlisteners to "window".
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return (
        <div>
            Window width is: 
            <h1>{windowWidth}</h1>
        </div>
    )
}