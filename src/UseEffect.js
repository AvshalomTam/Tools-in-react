import React, { useState, useEffect } from 'react';

export default function UseEffect() {

    const [resorceType, setResorceType] = useState('users')
    const [items, setItems] = useState([])

    // function will run only when argument from list like resorceType will change
    useEffect(() => {
        const link1 = `https://jsonplaceholder.typicode.com/${resorceType}`;
        // const link2 = `https://jsonplaceholder.typicode.com/${resorceType}/1`;

        fetch(link1)
        .then(response => response.json())
        .then(json => setItems(json))
    }, [resorceType])

    // empty array so will run only once
    useEffect(() => {
        console.log('on mount - I will run only the first time the app will rise')
    }, [])

    return (
        <div>
            <div>
                <button onClick={()=>setResorceType('posts')}>Posts</button>
                <button onClick={()=>setResorceType('users')}>Users</button>
                <button onClick={()=>setResorceType('comments')}>Comments</button>
            </div>
            <h1>{resorceType}</h1>
            {items.map(item => {
                return <pre key={item.id}>{JSON.stringify(item)}</pre>
            })}
        </div>
    )
}