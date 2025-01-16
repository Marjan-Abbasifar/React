
import React,{useReducer}  from 'react'
import { use } from 'react'
const initialState = { count:0 }

function reducer(state, action) {
    switch(action.type){
        case "increment":
           return {count: state.count + 1}
        case "decrement":
            return {count: state.count - 1}
        case "reset":
            return(initialState)
            default:
                //throw new Error
                return state
            }
       }
       const Counter = ()=>{
           
                  const [state, dispatch] = useReducer(reducer,initialState)
                  return(
                    <div className='bg-white p-4 rounded-lg shadow-lg w-full max-w-sm text-center'>
                        <h1 className='text-2xl mb-4'>count: {state.count}</h1>
                        <div className='space-x-2'>
                            <button onClick={()=>dispatch({type: 'increment'})} className='bg-blue-500 text-white p-2 rounded'>
                              Increment
                            </button>

                            <button onClick={()=>dispatch({type: 'decrement'})} className='bg-red-500 text-white p-2 rounded'>
                              Decrement
                            </button>

                            <button onClick={()=>dispatch({type: 'reset'})} className='bg-gray-700 text-white p-2 rounded'>
                             Reset
                            </button>
                        </div>
                    </div>
                  )

       }
       export default Counter


