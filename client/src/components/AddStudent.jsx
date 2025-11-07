import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Login.css'
function AddStudent(){
  const college_id = localStorage.getItem("college_id");
  const [college_name,setName]=useState("");
  const [student_name,setStdName]=useState("");
  const [student_rollno,setRollno]=useState("");
  const [student_branch,setBranch]=useState("");
  const [student_year,setYear]=useState("");
  const [student_section,setSection]=useState("");
  const [student_Father,setFatherName]=useState("");
  const [student_Mother,setMotherName]=useState("");
  const [parent_Mobile,setParMobile]=useState("");
  const [student_email,setEmail] = useState("");
  const [student_Mobile,setStdMobile]=useState("");
  const [year_of_join,setJoindate]=useState("");
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const res = await axios.get(`http://localhost:3000/api/collegeName/${college_id}`);
    setName(res.data.value);
    const newData ={
      college_id,
        college_name,
        student_name,
        student_rollno,
        student_branch,
        student_year,
        student_section,
        student_Father,
        student_Mother,
        parent_Mobile,
        student_email,
        student_Mobile,
        year_of_join
    }
    const response = await axios.post('http://localhost:3000/api/student',{newData});
    console.log(response);
  }
  return(
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name:-</label>
        <input type="text" onChange={(e)=>setStdName(e.target.value)} placeholder="Enter student Name"></input>
        <label>Rollno:-</label>
        <input type="text" onChange={(e)=>setRollno(e.target.value)} placeholder="Enter Roll Number"></input>
        <label>Branch:-</label>
        <input type="text" onChange={(e)=>setBranch(e.target.value)} placeholder="Enter Branch"></input>
        <label>Year</label>
        <input type="text" onChange={(e)=>setYear(e.target.value)}placeholder="Enter the branch"></input>
        <label>Section</label>
        <input type="text" onChange={(e)=>setSection(e.target.value)}placeholder="Enter the section"></input>
        <label>FatherName:-</label>
        <input type="text" onChange={(e)=>setFatherName(e.target.value)} placeholder="Enter Father Name"></input>
        <label>MotherName:-</label>
        <input type="text" onChange={(e)=>setMotherName(e.target.value)}  placeholder="Enter Mother Name"></input>
        <label>ParentMobile:-</label>
        <input type="number" onChange={(e)=>setParMobile(e.target.value)}  placeholder="Enter Mobile Number"></input>
        <label>Email:-</label>
        <input type="email" onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Student email"></input>
        <label>StudentMobile:-</label>
        <input type="number" onChange={(e)=>setStdMobile(e.target.value)}  placeholder="Enter Student Number"></input>
        <label>Year of joining:-</label>
        <input type="date" onChange={(e)=>setJoindate(e.target.value)}  placeholder="Enter Joining Date"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default AddStudent;