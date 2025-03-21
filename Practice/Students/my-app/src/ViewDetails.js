import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function ViewDetails(){
  // console.log(useParams());
    
    
   const {studentid} = useParams()
   const [studentData, setStudentData] = useState({})
   useEffect(()=>{
    fetch("http://localhost:8000/students/"+studentid)
    .then((res)=> res.json())
    .then((data)=> setStudentData(data)
    //.catch((err)=> console.log(err.message) It creates an error on my screen 
     )
    //)

   },[])
   // console.log(studentid);
    
    return(
        <div className="containter">
          <h1>Student Details</h1>
          { studentData && <div className="details">
            <p><strong>ID:</strong>{studentData.id}</p>
            <p><strong>Name:</strong>{studentData.name}</p>
            <p><strong>Place:</strong>{studentData.place}</p>
            <p><strong>Phone:</strong>{studentData.phone}</p>
          </div>}
          <Link to= "/" className="btn btn-back" >back</Link>
        </div>
          )
}
