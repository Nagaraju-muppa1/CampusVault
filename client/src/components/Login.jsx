import React, { useState } from "react";
import {Link,useNavigate} from 'react-router-dom';
import './Login.css'
import axios from "axios"
function Login(){
  const [college_id,setId] = useState("");
  const [college_name, setName] = useState("");
  const [password ,setPassword] = useState("");
  const [message, setMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
      try{
          const newData ={college_id,
                          college_name,
                          password
          }
          const response = await axios.post("http://localhost:3000/api/auth/signup",newData);
          if(response.data.success){
               console.log(response.data.values);
               localStorage.setItem("college_id",response.data.values);
               setMsg(response.data.message);
               navigate("/dashboard")
          }else{
               console.log(response.data.message);
               setMsg(response.data.message);
          }
          
          
      }catch(error){
        console.log(error);
        setMsg(error);
      }
  }
return(
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>CollegeId:-</label>
        <input type="text" value={college_id} onChange ={(e)=>setId(e.target.value)} placeholder="College Id required"></input><br></br>
        <label>CollegeName:-</label>
        <input type="text" value={college_name} onChange ={(e)=>setName(e.target.value)} placeholder="College Name is required"></input><br></br>
        <label>Password</label>
        <input type="text" value={password} onChange ={(e)=>setPassword(e.target.value)} placeholder="Password is required"></input><br></br>
        <button type="submit">Submit</button>
         <p>{message}</p>
      </form>
     
    </>
)

}

export default Login;