import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement, selectCount, incrementAsync, decrementAsync} from './counterSlice'

export default function Counter(){
    const dispatch = useDispatch();
    const value = useSelector(selectCount);
    const [extra, setExtra] = useState(0)

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
            <div>
                <input type='number' onChange={(e) => {setExtra(isNaN(e.target.value)?0:e.target.value)}}/>
                <button 
                    onClick={() => {dispatch(incrementAsync(Number(extra)))}}
                >Add async</button>
                <button onClick={() => {console.log('dec async')}}>Dec async</button>
            </div>
        </div>
    )
}