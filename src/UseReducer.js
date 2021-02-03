import React, { useReducer, useState } from 'react';
import Todo from './Todo'

export const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOGGLE_TODO: 'toggle-todo',
    DELETE_TODO: 'delete-todo'
}

function reducer (todos, action) {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    return {...todo, complete: !todo.complete}
                }
                return todo
            })
        case ACTIONS.DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload.id)
        default: 
            return todos
    }
}

function newTodo(name) {
    return {
        id: Date.now(),
        name: name,
        complete: false
    }
}

export default function UseReducer() {
    const [ todos, dispatch ] = useReducer(reducer, [] )
    const [ name, setName ] = useState('')
    const [ message, setMessage ] = useState('')
  
    function handleSubmit(e) {
        e.preventDefault()
        if (name === '') {
            setMessage('Please insert todo before submittion')
            return
        }
        setMessage('')
        dispatch({type: ACTIONS.ADD_TODO, payload: { name: name }})
        setName('')
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button type="submit">Submit</button>
            <br></br>
            <p>{message}</p>
        </form>
        {todos.map(todo => { 
            return <Todo key={todo.id} todo={todo} dispatch={dispatch}/> 
        })}
        </div>
    )
}