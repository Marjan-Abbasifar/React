import { TaskProvider } from "./context/TaskContext"
import TaskForm from "./Components/TaskForm"
import TaskList from "./Components/TaskList"

function App() {
  

  return (
   <TaskProvider>
    <div className="container mx-auto p-4">
<h1 className="text-2xl mb-4">Task Manager</h1>
<TaskForm/>
<TaskList/>
    </div>
   </TaskProvider>
  )
}

export default App
