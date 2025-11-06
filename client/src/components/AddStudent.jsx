import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import './Login.css'
function AddStudent(){
  const college_id = localStorage.getItem("college_id");
  const [college_name,setName]=useState("");
  const [student_name,setStdName]=useState("");
  const [student_rollno,setRollno]=useState("");
  const handleSubmit = async()=>{
    
  }
  return(
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label>Name:-</label>
        <input type="text" placeholder="Enter student Name"></input>
        <label>Rollno:-</label>
        <input type="text" placeholder="Enter Roll Number"></input>
        <label>Branch:-</label>
        <input type="text" placeholder="Enter Branch"></input>
        <label>FatherName:-</label>
        <input type="text" placeholder="Enter Father Name"></input>
        <label>MotherName:-</label>
        <input type="text" placeholder="Enter Mother Name"></input>
        <label>ParentMobile:-</label>
        <input type="number" placeholder="Enter Mobile Number"></input>
        <label>Email:-</label>
        <input type="email" placeholder="Enter Student email"></input>
        <label>StudentMobile:-</label>
        <input type="number" placeholder="Enter Student Number"></input>
        <label>Year of joining:-</label>
        <input type="date" placeholder="Enter Joining Date"></input>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}
export default AddStudent;