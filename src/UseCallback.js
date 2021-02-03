import React, {useState, useCallback} from 'react'
import List from './List'
import list from './List'

export default function UseCallback() {

    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback((incrementor) => {
        if (isNaN(number)) return [incrementor, incrementor+1, incrementor+2]
        const incremented = number + incrementor
        return [incremented, incremented+1, incremented+2]
    }, [number])

    const theme = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    return (
        <div>
            <div style={theme}>
                <input 
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
                />
                <button onClick={() => setDark(prevDark => !prevDark)}>
                Toggle Theme
                </button>
                <List getItems={getItems}/>
            </div>
        </div>
    )
}
