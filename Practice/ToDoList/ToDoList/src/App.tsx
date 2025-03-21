

import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos]= useState([]);
  const [newTodo, setNewTodo]= useState('');

  const addTodo =() =>{
    setTodos([...todos, newTodo])
    setNewTodo('')
  };
 

  return (
   
       <div>
        <h2>To Do List</h2>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      
        <button onClick={addTodo}> Add</button>
       <ul>
   
          {todos.map((todo, index)=>(
          <li key={index}> {todo}</li>

         ))}
        </ul>

       </div>

      

    
  );
}

export default App
