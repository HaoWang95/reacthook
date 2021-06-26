import React, {useState} from 'react';
  

const CounterButton = () => {
   const [count, setCount] = useState(0)
   const decrementCount = () => {
       setCount(prev => prev === 0? prev : prev - 1)
   }

   const incrementCount = () => {
       setCount(prev => prev + 1)
   }
   return (
       <React.Fragment>
           <button onClick = {decrementCount}>-</button>
           <span>{count}</span>
           <button onClick = {incrementCount}>+</button>
       </React.Fragment>
   )
}

export default CounterButton;