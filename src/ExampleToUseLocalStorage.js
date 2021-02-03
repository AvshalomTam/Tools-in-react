import React from 'react'
import useLocalStorage from './useLocalStorage'
import useUpdateLogger from './useUpdateLogger'

export default function ExampleToUseLocalStorage() {

    const [name, setName] = useLocalStorage('name', '')
    useUpdateLogger(name) 

    return (
        <div>
            What you tipe here saved in LocalStorage:
            <input 
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            />
        </div>
    )
}
