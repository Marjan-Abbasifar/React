import { useState } from 'react'

import './App.css'
import Overlay from './assets/Components/Overlay'

function App() {
  const[isOverlayVisible,setOverlayVisible]=useState(false)

  const openOverlay=()=>{
    setOverlayVisible(true)
  }

  const closeOverlay =()=>{
    setOverlayVisible(false)
  }
  

  return (
    <>
    <h1>Overlay example</h1>
    <button onClick={openOverlay}>Open Overlay</button>

      <Overlay isVisible={isOverlayVisible} onClose={closeOverlay}/>
    </>
  )
}

export default App
