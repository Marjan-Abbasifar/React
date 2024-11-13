import { useState } from "react";

 function NameForm(){
    const[formData,setFormData]= useState({
        name:"",
        age:"",
       profession:"",
    })
    const [profiles,setProfiles] = useState([]);

    function handleChange(event){
       
        const{name,value}=event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
        
    }
     

     function handleSubmit(event){
       event.preventDefault();
       if(formData.name && formData.age && formData.profession)
       {
        setProfiles([...profiles, formData])
        setFormData({name:"", age:"", profession:""})
       }else{
        alert("Please fill in all fields")
       }

   

    }
    return(
        <div className="container mt-4">
            <form onSubmit={(handleSubmit)}>
                <div className="form-group mb-2">
                <input 
                className="form-control"
                name="name"
                 type="text"
                 value={formData.name} 
                 placeholder="Enter Your Name" 
                 onChange={handleChange}
                 />
                </div>


               <div className="form-group mb-2">
               <input 
                className="form-control "
                name="age"
                 type="number"
                 value={formData.age} 
                 placeholder="Enter your age" 
                 onChange={handleChange}
                 />
               </div>

               


               <div className="form-group mb-2">
               <input 
                className="form-control"
                name="profession"
                 type="text"
                 value={formData.profession} 
                 placeholder="Enter your profession" 
                 onChange={handleChange}
                 />
               </div>

            

              
                <button  className="btn btn-success mt-3">Submit</button>
            </form>
           
                {profiles.map((profile, index)=>(
                <div className="card mt-3"key={index}>
                    <div  className="card-body">
                       <h5 className="card-title">{profile.name}</h5>
                       <h6 className="card-subtitle mb-2 text-muted">Age: {profile.age}</h6>
                       <p className="card-text">Profession: {profile.profession}</p>
                     </div>
                </div>
                ))}
        </div>   
        
    )
 }
 export default NameForm