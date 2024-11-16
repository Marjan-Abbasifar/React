import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { useEffect, useState } from 'react'

function App() {
  const[data, setData]=useState([])
  const[isLoding, setIsLoading]= useState(false)
 

  //getData()
  useEffect(()=>{
    async function getData() {
      setIsLoading(true)
      const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      const jsonData = await response.json()
      setData(jsonData)
      setIsLoading(false)
    }
    getData();

  },[])
  

  return (
    <div>
      {/* <DataFetching data={data} isLoding={isLoding}/> */}
      <AdjustTableTimer/>
    </div>
  )
}

export default App

function DataFetching({data,isLoding}){
  if(isLoding){
    return<div>Loading...</div>
  }
 
  return(
<div>
  {data.map((post)=>(
    <div key={post.id}><strong>{post.title}</strong><p>{post.body}</p></div>
  ))
  }
</div>
  )

}


function AdjustTableTimer(){
  const[seconds,setSeconds]=useState(0)
  const[intervalMs,setIntervalMs]=useState(1000)


  useEffect(()=>{
   const Interval= setInterval(()=>{
      setSeconds(prevSeconds=> prevSeconds+1)

    },intervalMs)
    return() => clearInterval(Interval)
  },[intervalMs])
  return(
    <div>
      <div>
        Seconds: {seconds}
        <hr />
        </div>
        <div>
        <div><label > Adjust Interval (MS):</label></div>
        <div><input type="number" 
        value={intervalMs}
        onChange={(e)=> setIntervalMs(Number(e.target.value))}
        /></div>
        
        </div>
      
      
    </div>
  )
}
