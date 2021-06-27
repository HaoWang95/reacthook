import React, {useState, useReducer} from 'react'

const reducer = (state, action) => {
    if(action.type === 'increment'){
        return {counterValue: state.counterValue + 1}
    }
    if(action.type === 'decrement'){
        return {counterValue: state.counterValue - 1}
    }
    return state
}

export default function CounterReducer(){

    const [counterValueState, dispatch] = useReducer(reducer, {counterValue: 0})
    //const [counterValue, setCounterValue] = useState(0);

    const increment = () => {
        dispatch({type:'increment'});
    }

    const decrement = () => {
        dispatch({type:'decrement'})
    }
    
    return (
        <React.Fragment>
            <button onClick = {decrement}>-</button>
            <span>{counterValueState.counterValue}</span>
            <button onClick = {increment}>+</button>
        </React.Fragment>
    )
}