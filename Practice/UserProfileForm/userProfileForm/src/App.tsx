

import { useState } from 'react';
import './App.css'

function App() {
  const [profile, setProfile] =useState ({name: "", age:""})
  const handleChange =(e) =>{
    const {name, value} = e.target;
    setProfile((prevProfile)=>({
      ...prevProfile,
      [name] :value

    }));

  }


  return (
  <div>
   <h2>
    User profile
   </h2>
   <input type="text" name='name' placeholder='name' value={profile.name} onChange={handleChange} />
   <input type="text" name='age' placeholder='age' value={profile.age} onChange={handleChange} />
   <p> Name: {profile.name}</p>
   <p> Age: {profile.age}</p>
  </div>
  )
}

export default App
