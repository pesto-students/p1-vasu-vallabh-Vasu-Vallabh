import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, reset } from './stepsSlice';
import "./app.css";

function App() {

    let steps = useSelector((state) => state.step.value);
    let dispatch = useDispatch();

    return (
        <div className='path'>
            <h1>You have walke'd {steps} steps today!</h1> <br />
            <button className='step' onClick={() => dispatch(increment())}>+1</button>
            <button className='reset' onClick={() => dispatch(reset())}>RESET</button>
        </div>
    )
}

export default App