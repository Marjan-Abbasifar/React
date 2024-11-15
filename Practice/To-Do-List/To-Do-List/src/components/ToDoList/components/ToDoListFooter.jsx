function ToDoListFooter({totalDone,totalWorks}){
    return(
        <div className="footer">
            <footer className="bg-light text-dark text-center p-2">
                <p className="display-7"> 
                    {totalDone} of {totalWorks} works have been done!
                </p>

            </footer>
        </div>
    )
}
export default ToDoListFooter