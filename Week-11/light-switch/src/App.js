import React, { useState } from 'react';
import './App.css';
import Switch from "react-switch";
import { useSelector, useDispatch } from 'react-redux'
import { flip } from './app/features/switchSlice';

function App() {
    const isOn = useSelector((state) => state.switch.value);
    const dispatch = useDispatch();

    return (
        <div className={isOn ? `room lit` : `room dark`} >
            <div>
                <Switch onChange={() => dispatch(flip())} checked={!isOn} />
                <p>{isOn ? 'ON' : 'OFF'}</p>
            </div>
        </div>
    )
}

export default App