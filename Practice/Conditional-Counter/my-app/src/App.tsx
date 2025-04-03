
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const[count, setCount]= useState(0)
  const[message, setMessage] = useState('')

  useEffect(()=>{
    if(count>5){
      setMessage("The counter is greater than 5")
    }
    else{
      setMessage("")
    }

  },[count])
 

  return (
 <div>
  <h1>count: {count}</h1>
  <button onClick={()=> setCount(count+1)}>Increment</button>
  <button onClick={()=> setCount(count-1)}>Decrement</button>
  {message && <p>{message}</p>}
 </div>
  )
}

export default App
