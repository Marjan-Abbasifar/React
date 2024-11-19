

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Footer from './components/footer'
import { useEffect, useState } from 'react'
import BookList from './components/BookList'
import useBooks from './Services/useBooks'
import BookDetail from './components/BookDetail'


function App() {
  const[selectedBook, setSelectedBook] = useState(null)
  const{books, loading, setSearchTerm} = useBooks('fiction')

  
  // url: https://www.googleapis.com/books/v1/volumes?q=javascript}
 
  function handleSearch(query){
    setSearchTerm(query)
    }

    function handleSeeMore(book){
      setSelectedBook(book.volumeInfo)

    }
    function handleCloseModal(){
      setSelectedBook(null)

    }
  
  return (

    <>
    <NavBar onSearch={handleSearch}/>
    {loading ? <p className="placeholder-glow display-6  text-body-secondary mt-1"><span className="placeholder col-12 p-3">Loading...</span></p>: <BookList books={books} onSeeMore={handleSeeMore}/>}
    

    <Footer/>
     { selectedBook &&<BookDetail book={selectedBook} onClose={handleCloseModal}/>}
    </>
  )
}

export default App
