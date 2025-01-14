import { createContext, useContext, useState,useEffect, Children } from "react";
const TaskContext = createContext();

export const useTasks= () => useContext(TaskContext)
export const TaskProvider =({children}) =>{
    const[tasks, setTasks] = useState(()=>{
        const savedTasks = localStorage.getItem("tasks")
        return savedTasks ? JSON.parse(savedTasks) : []


    })
    useEffect(()=>{
        localStorage.setItem("tasks", JSON.stringify(tasks))
    },[tasks])

    const addTask = (task) => {
        setTasks([...tasks, task])
    }

    const removeTask = (taskId) => {
        setTasks(tasks.filter(task => task.id != taskId))
    }

return(
    <TaskContext.Provider value={{tasks, addTask,removeTask}}>
        {children}

    </TaskContext.Provider>
)

}


// import { createContext, useContext, useState, useEffect } from "react";

// const TaskContext = createContext()

// export const useTasks = useContext(TaskContext);

// export const TaskProvider = ({ children}) => {
//     const [tasks, setTasks] = useState(() => {
//         try {
//             const savedTasks = localStorage.getItem("tasks");
//             return savedTasks ? JSON.parse(savedTasks) : [];
//         } catch (error) {
//             console.error("Error parsing tasks from localStorage:", error);
//             return [];
//         }
//     });

//     useEffect(() => {
//         localStorage.setItem("tasks", JSON.stringify(tasks));
//     }, [tasks]);

//     const addTask = (task) => {
//         setTasks([...tasks, task]);
//     };

//     const removeTask = (taskId) => {
//         setTasks(tasks.filter((task) => task.id !== taskId));
//     };

//     return (
//         <TaskContext.Provider value={{ tasks, addTask, removeTask }}>
//             {children}
//         </TaskContext.Provider>
//     );
// };