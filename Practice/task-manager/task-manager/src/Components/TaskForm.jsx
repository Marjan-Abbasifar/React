import {useState} from 'react'
import { useTasks } from '../context/TaskContext'

const TaskForm = () => {
    const[taskName, setTaskName] = useState("")
    const{addTask}= useTasks()

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask({id: Date.now(), name: taskName})
        setTaskName("")

    }
  return (
    <div>
      <form onSubmit={handleSubmit} className='mb-4 flex space-x-2'>
        <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} className='border p-2 flex-1' />
        <button type='submit' className='bg-blue-500 text-white p-2'>Add Task</button>
      </form>
    </div>
  )
}

export default TaskForm
