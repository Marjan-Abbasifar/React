
import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [windowsize, setWindowsize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(()=>{
    function handleResize(){
      setWindowsize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      
    }
    window.addEventListener('resize', handleResize)
    return() =>{
      window.removeEventListener('resize', handleResize)
    }
  },[])
 

  return (
    <div>
<h2>Window Resize</h2>
<p>width: {windowsize.width}</p>
<p>height: {windowsize.height}</p>
    </div>
  
  )
}

export default App
