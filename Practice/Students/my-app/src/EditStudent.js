import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditStudent(){
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[place,setPlace]=useState("");
    const[phone,setPhone]=useState("");
    const[validation, setValidation] = useState(false)
    const navigate = useNavigate()
    const {studentid} = useParams()
       //const [studentData, setStudentData] = useState({})
       useEffect(()=>{
        fetch("http://localhost:8000/students/"+studentid)
        .then((res)=> res.json())
        .then((data)=> {
            setId(data.id)
            setName(data.name)
            setPlace(data.place)
            setPhone(data.phone)
        }
        
        //.catch((err)=> console.log(err.message) It creates an error on my screen 
         )
        //)
    
       },[])

       const handleSubmit=(e)=>{
        e.preventDefault();
        const studentData = {id,name,place,phone};
       
        
        fetch("http://localhost:8000/students/" + studentid ,{
            method: 'Put',
            headers:{
                "content-type": "application/json"
            },
            body: JSON.stringify(studentData)

            })
            // .then(res => res.json())
            // .then(()=>{
            //     this.useState({sendMessage: ""})
            // });
            
        .then((res)=>{
            alert('Student Data Updated Successfully')
            navigate('/')   //navigate to home page after clicking on add save to add a student.
        })
        .catch((err)=> console.log(err.message))

        
    }
   
    
    return(
       
             <div className="container">
                      <h2>Edit Student Details</h2>
                      <form onSubmit={handleSubmit}>
                          <label htmlFor="id">ID:</label>
                          <input type="text"  id="id" name="id" value={id} required onChange={e=> setId(e.target.value)} onMouseDown={()=> setValidation(true)}></input>
                          {id.length===0 && validation && <span className="errorMsg">Please enter your id.</span>}
          
                          <label htmlFor="name">Name:</label>
                          <input type="text"  id="name" name="name" value={name} required onChange={e=> setName(e.target.value)} onMouseDown={()=> setValidation(true)}></input>
                          {name.length===0 && validation && <span className="errorMsg">Please enter your name.</span>}
          
                          <label htmlFor="place">Place:</label>
                          <input type="text"  id="place" name="place" value={place} required onChange={e=> setPlace(e.target.value)}  onMouseDown={()=> setValidation(true)}></input>
                          {place.length===0 && validation && <span className="errorMsg">Please enter your place.</span>}
          
                          <label htmlFor="phone">Phone:</label>
                          <input type="text"  id="phone" name="phone" value={phone} required onChange={e=> setPhone(e.target.value)} onMouseDown={()=> setValidation(true)}></input>
                          {phone.length===0 && validation && <span className="errorMsg">Please enter your phone.</span>}
                             <div>
                              <button className="btn btn-save">Update</button>
                              <Link to= "/" className="btn btn-back" >back</Link>
                              </div>
                         
                              <div>
                              
                              </div>
                      </form>
                    </div>
    )
}
