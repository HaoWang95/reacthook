import React, { useReducer, useState } from 'react'
import ToDoItem from './ToDoItem'


export const ACTIONS = {
    ADD_TODO: 'add',
    DELETE_TODO: 'delete',
    TOGGLE_TODO: 'toggle'
}

const todoReducer = (todoState, todoAction) => {
    switch(todoAction.type){
        case ACTIONS.ADD_TODO:
            return [...todoState, newToDo(todoAction.payload.name)]
        case ACTIONS.TOGGLE_TODO:
            return todoState.map(
                todo => {
                    if(todo.id === todoAction.payload.id){
                        return {...todo, complete: !todo.complete}
                    }
                    return todo;
                }
            );
        case ACTIONS.DELETE_TODO:
            return todoState.filter(
                todo => {
                    return todo.id != todoAction.payload.id
                }
            );
        default:
            return todoState;

    }
}

const newToDo = (name) => {
    return {id: Date.now(), name: name, complete: false}
}

export default function ToDoList(){
    const [todos, dispatch] = useReducer(todoReducer, []);
    const [name, setName] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault(); // prevent from default refreshing
        dispatch({type: ACTIONS.ADD_TODO, payload:{name: name}});
        setName('')
    }

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input type='text' value={name} onChange = {e => setName(e.target.value)} />
            </form>
            {todos.map(todo =>  <ToDoItem key={todo.id} todo={todo} dispatch={dispatch}/>)}
        </React.Fragment>
    )
}