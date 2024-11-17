import { useEffect, useState } from "react";
import fetchBooks from "./Api-Client";


function useBooks(initialQuery){
    const[books,setBook] = useState([])
    const[searchTerm,setSearchTerm] = useState(initialQuery)
    const[loading,setLoading]= useState(false)
    useEffect(()=>{
        async function fetchBooksData(query){
        setLoading(true);
        try {
           const items = await fetchBooks(query);
           setBook(items);
        } catch (error) {
            if(error.name!=="AbortError"){
                console.error("Failed to fetch books", error)
            }
            
        }finally{
            setLoading(false)
        }
    }

        if(searchTerm)
            fetchBooksData(searchTerm)
    },[searchTerm]);


    return{books, loading, setSearchTerm}
    

}
export default useBooks

