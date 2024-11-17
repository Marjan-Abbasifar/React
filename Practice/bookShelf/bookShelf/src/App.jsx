

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar'
import Footer from './components/footer'
import { useEffect, useState } from 'react'
import BookList from './components/BookList'
import fetchBooks from './Services/Api-Client'
import useBooks from './Services/useBooks'


function App() {
  const{books, loading, setSearchTerm} = useBooks('fiction')

  
  // url: https://www.googleapis.com/books/v1/volumes?q=javascript}
 
//   useEffect(()=>{
    
//   fetchData()
   
// }, [searchTerm])


  
  // const fetchData = async()=>{
  //   setLoading(true);
  //   try {
  //     const items = await fetchBooks(searchTerm)
  //     setBook(items)
      
      
      
  //   } catch (error) {
    
  //   }finally{
  //     setLoading(false);
  //   }
   
  // }

  function handleSearch(query){
    setSearchTerm(query)
    }
  
  return (

    <>
    <NavBar onSearch={handleSearch}/>
    {loading ? <p className="placeholder-glow display-6  text-body-secondary mt-1"><span className="placeholder col-12 p-3">Loading...</span></p>: <BookList books={books}/>}
    <Footer/>
    </>
  )
}

export default App
