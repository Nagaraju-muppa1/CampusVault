import React,{useState} from 'react';
import './Login.css'
import axios from 'axios';
function DeleteStudent(){
    const [student_rollno,setRollno]=useState("");
    const [message,setmsg]=useState("");
    const handleSubmit = async(e)=>{
        e.preventDefault();
        const res = await axios.delete(`http://localhost:3000/api/student/delete/${student_rollno}`)
        console.log(res);
        setmsg(res.data.message);
    }
    return(
        <>
         <form className="form" onSubmit={handleSubmit}>
            <label>RollNo:-</label>
            <input type="text" onChange={(e)=>setRollno(e.target.value)} placeholder="Enter rollno"></input>
            <button type="submit">delete</button>
            <p>{message}</p>
         </form>
        </>
    )

}

export default DeleteStudent;