import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function StudentTable(){
    const [students, setStudents] = useState("")
    const navigate = useNavigate()
    const displayDetails= (id)=>{
       navigate('/student/view/'+ id)
        
    }

    const editDetails = (id) =>{
        navigate('/student/edit/' +id)
    }

    const removeDetails =(id) =>{
        if (window.confirm("Are you sure you want to delete?")){
            fetch("http://localhost:8000/students/" + id ,{
                method: 'DELETE',
        })
                // .then(res => res.json())
                // .then(()=>{
                //     this.useState({sendMessage: ""})
                // });
                
            .then((res)=>{
                alert('Student Data Removed Successfully')
                window.location.reload()   //navigate to home page after clicking on add save to add a student.
            })
            .catch((err)=> console.log(err.message))
    
            
        }
        }

    //}
    
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
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Place</th>
                            <th>Phone</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students && students.map((item, index)=>(
                                <tr key={item.id}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.place}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <button onClick={()=> displayDetails(item.id)} href="" className="btn btn-info">View</button>
                                    <button onClick={()=> editDetails(item.id)} className="btn btn-primary">Edit</button>
                                    <button onClick={()=> removeDetails(item.id)} className="btn btn-danger">Delete</button>
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