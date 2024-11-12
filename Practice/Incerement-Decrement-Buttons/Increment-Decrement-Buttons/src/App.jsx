
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const[count,setCount]=useState(0)


  
  function increment(){
    setCount(prevCount=> prevCount+1)
  }
  function decrement(){
    setCount(prevCount=> prevCount-1)
  }
 

  return (
    <div>
<p>Count:{count}</p>

<IncrementButton onIncrement={increment}/>

<DecrementButton onDecrement={decrement}/>
    </div>
    
  
  )
}

export default App



function IncrementButton({onIncrement}){
  return(

    <div>
      <button onClick={onIncrement} className=' btn btn-success'>Increment</button>
      
    </div>

  )
}

function DecrementButton({onDecrement}){
  return(
    <div>
      <button onClick={onDecrement} className='btn btn-danger mt-2'>Decrement</button>
      
      
    </div>

  )
}





