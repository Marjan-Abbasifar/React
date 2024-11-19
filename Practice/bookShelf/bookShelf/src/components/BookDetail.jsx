
function BookDetail({book , onClose}){
    

     

    return(
        <div className="modal show d-block" tabIndex={-1}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{book.title}</h5>
                     </div>
                    <div className="modal-body">
                        <img src={book.imageLinks?.thumbnail || "https://placehold.co/80x115"} 
                        alt={book.title.title}
                        className="img-fluid mb-3" />
                        <p>
                            <strong>Authors:</strong>
                            {book.authors.join(',')|| "unknown author"}
                        </p>
                        <p>
                            <strong>Published Date:</strong>
                            {book.publishedDate}
                        </p>
                        <p>
                            <strong>Description:</strong>
                            {book.description || "No Description"}

                        </p>

                    </div>
                    <div className="modal-footer">
                        <button  
                        
                        style={{backgroundColor:"red", 
                            color:"white",
                            border:"none",
                            outline:"none",
                            padding:"3px 25px"
                        }}
                        onClick={onClose}>
                            close

                        </button>
                    </div>
                </div>
            </div>
        </div>
        
       

    )
    
}
export default BookDetail