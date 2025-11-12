import React,{useState,useEffect} from 'react';
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';

function DisplayStudent(){
  const [students,setStd] = useState([{student_name:"",
    student_rollno:"",
    student_branch:""
}]);
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await axios.get('http://localhost:3000/api/student/data');
      console.log(response.data.message);
      setStd(response.data.message);
    }
    fetchData();
  },[])
  return(
    <>
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
            <tr>
              <td>{student.student_name}</td>
              <td>{student.student_rollno}</td>
              <td>{student.student_branch}</td>
              <td><Link to='/view'>view</Link></td>
              <td><Link to='/delete'>delete</Link></td>
              <td><Link to='/edit'>edit</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )

}

export default DisplayStudent;