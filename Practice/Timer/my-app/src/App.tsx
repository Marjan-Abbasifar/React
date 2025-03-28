import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    const interval = setInterval(() => {
      setCount((count)=> count+1)
    },1000);

    return()=> clearInterval(interval)
    },[]);

  return (
  <div>
<h1>count: {count}</h1>
  </div>
  )
}

export default App
