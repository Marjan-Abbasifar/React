function BookCard({book, onSeeMore}){

    const {
        title="No Title Available",
        authors= ['Unknown Authors'],
        imageLinks={},

    }=book.volumeInfo

    const thumbnail= imageLinks.thumbnail || "https://placehold.co/80x115"
    return(
        <div className="col-md-4 mb-3">
            <div className="card">
                <img  className="card-img-top" src={thumbnail} alt={title} />
                <div className="card-body">
                    <h5  className="card-title">{title}</h5>
                    <p className="card-text">{authors.join(",")}</p>
                    <button onClick={()=> onSeeMore(book)} className="btn btn-primary">See More</button>
                </div>
            </div>
        </div>
    )

} export default BookCard