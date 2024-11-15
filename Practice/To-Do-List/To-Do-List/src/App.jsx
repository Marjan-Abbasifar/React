import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css'
import './components/ToDoList/components/ToDoList'
import ToDoList from './components/ToDoList/components/ToDoList'
import ToDoListNav from './components/ToDoList/components/ToDoListNav'
import ToDoListFooter from './components/ToDoList/components/ToDoListFooter'
import ToDoListForm from './components/ToDoList/components/ToDoListForm'
import { useState } from 'react'

function App() {
  const[lists, setLists]=useState([])
  const[listsInput, setListsInput]=useState("")

  function handleOnChange(e){
    setListsInput(e.target.value)
  
  }

  function handleOnSubmit(e){
    e.preventDefault()
    if(!listsInput.trim()) return;
    const newTask ={
     id:Date.now(), 
     text: listsInput,
     done:false,
    }
    setLists([newTask, ...lists])
   setListsInput("")
 }

 function toggleDone(id){
 const updatedItems= lists.map((item) => {
  if(item.id===id){
    console.log(`toggling item ${id}: currently ${item.done?'done':'is not done'}`);

    return{...item, done:!item.done}
    
  }
  return item
  
  });
  setLists(updatedItems)
   }

   function handleRemoveItem(id){
    const updatedItem = lists.filter(item=> item.id!==id)
    setLists(updatedItem)
   }
   const totalWorks= lists.length;
   const totalDone= lists.filter(item=>item.done).length

  return (
    <div className='container pt-2'>
      <ToDoListNav/>
      <ToDoListForm handleOnChange={handleOnChange} handleOnSubmit={handleOnSubmit} item={listsInput} />
      <ToDoList items={lists} handleOnToggle={toggleDone} handleRemoveItem={handleRemoveItem}/>
      <ToDoListFooter totalDone={totalDone} totalWorks={totalWorks}/>
    </div>
    
  )
}

export default App
