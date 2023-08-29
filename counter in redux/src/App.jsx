import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment , decrement } from './CounterSlice';

function Counter() {
    let dispatch = useDispatch();
    let init = useSelector((state) => {
        return state.counter
    })
    function add()
    {
      console.log(increment)
    }
  return (
    <>
        <p>{init.counter}</p>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        
    </>
  )
}

export default Counter