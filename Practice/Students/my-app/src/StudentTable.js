import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function StudentTable(){
    const [students, setStudents] = useState("")
    
     useEffect(()=>{
           fetch('http://localhost:8000/students')
       .then((res)=>res.json())
      .then((data)=>
      setStudents(data)).catch((err)=>
      console.log(err.message))

    },[])

    return(
        <div className="container">
            <h2>
                Student Records
            </h2>
            <div className="table-container">
                
                <Link to={'/student/create'} className="btn btn-add">Add new student</Link>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students && students.map((item)=>(
                                <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.place}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <a href="" className="btn btn-info">View</a>
                                    <a href="" className="btn btn-primary">Edit</a>
                                    <a href="" className="btn btn-danger">Delete</a>
                                </td>
                            </tr>

                            )

                            )
                       
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
}
