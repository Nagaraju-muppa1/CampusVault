import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import './Login.css';
function Signin(){
    const [college_id,setId] = useState("");
    const [password,setPassword] = useState("");
    const [msg,setMsg]=useState("");
    const navigate = useNavigate();
    const handleSubmit =async (e)=>{
      e.preventDefault();
      try{
         const newData ={
            college_id,
            password
         }
         const response = await axios.post('http://localhost:3000/api/auth/signin',newData);
         if(response.data.success){
              navigate('/dashboard');
              setMsg(response.data.message);
              localStorage.setItem("college_id",response.data.values);
              console.log(response.data.message);
         }else{
              setMsg(response.data.message);
              console.log(response.data.message);
         }

      }catch(error){
         console.log(error);
      }   
    }
     return(
        <>
          <form className="form" onSubmit={handleSubmit}>
             <label>CollegId/CollegeName:-</label>
             <input type="text" value={college_id} onChange={(e)=>setId(e.target.value)}placeholder="CollegeId of CollegeName"></input>
             <label>Password:-</label>
             <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"></input>
             <button type="submit">submit</button>
             <p>{msg}</p>
          </form>
        </>
     )
}

export default Signin;