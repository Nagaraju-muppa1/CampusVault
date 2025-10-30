import React, { useState } from "react";
import axios from "axios"
function Login(){
  const [collegename,setName] = useState("");
  const [collegeId, setId] = useState("");
  const [password ,setPassword] = useState("");
  const [message, setMsg] = useState("");
  const handleSubmit= async (e)=>{
    e.preventDefault();
      try{
          const newData ={collegename,
                          collegeId,
                          password
          }
          const response = await axios.post("http://localhost:3000/api/auth/signin",newData);
          console.log(response);
          setMsg(response);
      }catch(error){
        setMsg(error);
      }
  }
return(
    <>
      <form onSubmit={handleSubmit}>
        <label>CollegeName:-</label>
        <input type="text" value={collegename} onChange ={(e)=>setName(e.target.value)} placeholder="College Name required"></input>
        <label>CollegeId:-</label>
        <input type="text" value={collegeId} onChange ={(e)=>setId(e.target.value)} placeholder="College Id is required"></input>
        <label>Password</label>
        <input type="text" value={password} onChange ={(e)=>setPassword(e.target.value)} placeholder="Password is required"></input>
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </>
)

}

export default Login;