import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { increment, decrement } from './CounterSlice'
import './App.css'

function App() {
const count = useSelector((state)=> state.counter.value);
const dispatch = useDispatch();


  return (
    <div>
      <h1>
        counter: {count}</h1>
        <button onClick={()=> dispatch(increment())}>increment</button>
        <button onClick={()=> dispatch(decrement())}>decrement</button>
    </div>
  )
    
}

export default App
