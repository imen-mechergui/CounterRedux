
import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, reset} from '../Redux/Actions/CounterActions'

export const Counter = () => {
    const count = useSelector((state) => state.counter);
        const dispatch = useDispatch()
    return (
         
        <div className="counter">
            <h1> count</h1>
            <button className="increment-btn" onClick={()=> dispatch(increment(8))}>+</button>
            <span>{count}</span>
            <button className="decrement-btn" onClick={()=> dispatch(decrement())}>-</button>
            <br/>
            <button className="Reset-btn" onClick={()=> dispatch(reset())}>Reset</button>
        </div>
    )
}