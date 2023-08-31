import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decerement, increment } from './reduxmaterial/counterSlice';

function App() {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div className='app'>
            <button onClick={() => dispatch(increment())}>
                increment..
            </button>
            <p>
                {counter}
            </p>
            <button onClick={() => dispatch(decerement())}>
                Decerement
            </button>
        </div>
    );
}

export default App;
