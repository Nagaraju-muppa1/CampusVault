import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Login.css'
function DisplayStudent(){
  const [students,setStd] = useState([{student_name:"",
    student_rollno:"",
    student_branch:""
  }]);
  const fetchData = async()=>{
      const response = await axios.get('http://localhost:3000/api/student/data');
      console.log(response.data.message);
      setStd(response.data.message);
  }
  useEffect(()=>{
    fetchData();
  },[])
  const deleteStd = async(student_rollno)=>{
        // e.preventDefault();
        const res = await axios.delete(`http://localhost:3000/api/student/delete/${student_rollno}`)
        console.log(res);
        fetchData();
  }
  return(
    <>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>RollNo</th>
            <th>Branch</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student)=>(
            <tr key={student.student_rollno}>
              <td>{student.student_name}</td>
              <td>{student.student_rollno}</td>
              <td>{student.student_branch}</td>
              <td><Link to='/view' state={{student_rollno:student.student_rollno}}>view</Link></td>
              <td><button onClick={()=>deleteStd(student.student_rollno)}>delete</button></td>
              <td><Link to='/edit'>edit</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
    </>
  )

}

export default DisplayStudent;