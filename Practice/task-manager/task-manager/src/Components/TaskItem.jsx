import React from 'react'
import { useTasks } from '../context/TaskContext'

const TaskItem = ({task}) => {
    const {removeTask} = useTasks()

  return (
    <div className='flex justify-between items-center mb-2 p-2 border'>
        <span>{task.name}</span>
        <button onClick={()=> removeTask(task.id)} className='bg-red-500 text-white p-1'>Remove task</button>
      
    </div>
  )
}

export default TaskItem
