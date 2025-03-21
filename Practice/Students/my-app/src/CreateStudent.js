import {Link, useNavigate} from "react-router-dom"
import { useState } from "react";
export default function CreateStudent(){
    const[id,setId]=useState("");
    const[name,setName]=useState("");
    const[place,setPlace]=useState("");
    const[phone,setPhone]=useState("");
    const[validation, setValidation] = useState(false)
    const navigate = useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault();
        const studentData = {id,name,place,phone};
       
        
        fetch("http://localhost:8000/students",{
            method: 'POST',
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
            alert('Student Data Saved Successfully')
            navigate('/')   //navigate to home page after clicking on add save to add a student.
        })
        .catch((err)=> console.log(err.message))

        
    }
    return(
       
          <div className="container">
            <h2>Add New Student</h2>
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
                    <button className="btn btn-save">Save</button>
                    <Link to= "/" className="btn btn-back" >back</Link>
                    </div>
               
                    <div>
                    
                    </div>
            </form>
          </div>
       
    )

}
