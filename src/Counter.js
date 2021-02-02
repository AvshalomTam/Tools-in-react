import React, { useState } from 'react';

export default function Counter() {

    const [ count, setCount ] = useState(() => { return 0 })
    // you can break the state to pieces
    const [ theme, setTheme ] = useState(() => {return 'zero'})
  
    function incrementCount() {
      setCount(prevCount => { return prevCount+1 })
      setTheme('inc')
    }
  
    function decrementCount() {
      setCount(prevCount => { return prevCount-1 })
      setTheme('dec')
    }
  
    function zeroCount() {
      setCount(0)
      setTheme('zero')
    }

    return (
        <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>
        <br></br>
        <button onClick={zeroCount}>Zero Count</button>
        </div>
    )
}