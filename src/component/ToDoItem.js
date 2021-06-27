import React from 'react';

export default function ToDoItem({todo}){
    return (
        <div>
            <span style = {{color: todo.complete? '#AAA': '#000'}}>
                {todo.name}
            </span>
            <button>Complete</button>
            <button>Delete</button>
        </div>
    )
}