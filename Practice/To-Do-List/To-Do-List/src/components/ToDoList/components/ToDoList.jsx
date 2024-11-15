function ToDoList({items,handleOnToggle,handleRemoveItem}){
    return(
    
        <div>
              {items.map((item)=>(
                
            
           <div key={item.id} className="card mb-2 p-2 d-flex justify-content-between align-item-center">
            <div className="d-flex align-items-center justify-content-between">


               <div className="d-flex"> 
                <div 
                onClick={()=> handleOnToggle(item.id)}
                style={{height:"20px", width:"20px", cursor:"pointer"}} 
                className={`rounded-circle me-2 ${
                    item.done? 'bg-success':'bg-secondary'
                } mt-3`}> 
                </div>
                <div className={`${item.done ? 'text-decoration-line-through':""}`}> 
                     <p className="display-8 pt-2 mt-1">{item.text}</p>
                </div>
                </div>
               
                
              
                <button onClick={()=>handleRemoveItem(item.id)} className="btn btn-danger ms-3"> <i style={{cursor:"pointer"}} className="bi bi-trash"></i></button> 
           
            </div>
          
          
           </div>
             ))}
        </div>
      )  

    }
export default ToDoList