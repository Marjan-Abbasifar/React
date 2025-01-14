import React from 'react'
import { useTasks } from '../context/TaskContext'
import TaskItem from './TaskItem'

const TaskList = () => {
    const {tasks} = useTasks()
  return (
    <div>
      {tasks.length === 0 ? (
        <p className='text-gray-500'>No Task Available</p>
      ) : (
        tasks.map(task => <TaskItem key={task.id} task={task}/>)
      )}
    </div>
  )
}

export default TaskList
