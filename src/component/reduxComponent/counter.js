import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, incrementByAmount, selectCount} from './counterSlice'

export default function Counter(){
    const dispatch = useDispatch();
    const value = useSelector(selectCount);
    
    return (
        <div>
            <button
                onClick={() => dispatch(increment())}
            >
                +
            </button>
            <span>{value}</span>
            <button
                onClick={() => dispatch(decrement())}
            >
                -
            </button>
        </div>
    )
}