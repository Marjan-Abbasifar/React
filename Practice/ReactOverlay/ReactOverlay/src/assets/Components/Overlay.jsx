import React from 'react'
import "./overlay.css"

function Overlay({isVisible, onClose}) {
    if(!isVisible) return null
  return (
    <div className="overlay">
        <div className="overlay-content">
            <h2>Overlay content</h2>
            <button onClick={onClose}>close</button>
        </div>
    </div>
  )
}

export default Overlay
