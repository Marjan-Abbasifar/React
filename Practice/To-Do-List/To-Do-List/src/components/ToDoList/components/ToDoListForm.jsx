function ToDoListForm({item,handleOnSubmit,handleOnChange}){
    return(
        <div>
            <form onSubmit={handleOnSubmit} className="mb-3">
                <input 
                type="text"
                value={item}
                className="form-control" 
                placeholder="Add a task"
                onChange={handleOnChange}/>
                <button className="btn btn-primary mt-2"> Add Task</button>
            </form>
        </div>

    )
}
export default ToDoListForm