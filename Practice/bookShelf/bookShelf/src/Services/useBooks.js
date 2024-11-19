import { useEffect, useState } from "react";
import fetchBooks from "./Api-Client";


function useBooks(initialQuery){
    const[books,setBook] = useState([])
    const[searchTerm,setSearchTerm] = useState(initialQuery)
    const[loading,setLoading]= useState(false)
    useEffect(()=>{
        const controller= new AbortController();
        async function fetchBooksData(query){
        setLoading(true);
        try {
           const items = await fetchBooks(query, controller);
           setBook(items);
        } catch (error) {
            if(error.name!=="AbortError"){
                console.error("Failed to fetch books", error)
            }
            
        }finally{
            setLoading(false)
        }
    }

        if(searchTerm){
            fetchBooksData(searchTerm)
        }
        // return ()=>{controller.abort}


    },[searchTerm]);


    return{books, loading, setSearchTerm}
    

}
export default useBooks

