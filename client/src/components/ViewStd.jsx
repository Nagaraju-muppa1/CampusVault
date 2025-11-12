import React,{useState,useEffect} from 'react';
import {Link,useNavigate, useLocation} from 'react-router-dom';
import axios from 'axios';

function ViewStd(){
    const location = useLocation();
    const [student,setDetails] = useState({})
    const {student_rollno} =location.state;
    const fetchData = async()=>{
        const res = await axios.get(`http://localhost:3000/api/student/${student_rollno}`);
        // console.log(res.data.message);
        setDetails(res.data.message);
    }
    //console.log(student.student_rollno);
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <>
          <p>Name:-{student.student_name}</p>
          <p>Rollno:-{student.student_rollno}</p>
          <p>Branch:-{student.student_branch}</p>
          <p>Section:-{student.student_section}</p>
          <p>Year:-{student.student_year}</p>
          <p>FatherName:-{student.student_Father}</p>
          <p>MotherName:-{student.student_Mother}</p>
          <p>ParentMobile:-{student.parent_Mobile}</p>
          <p>Email:-{student.student_email}</p>
          <p>StudentMobile:-{student.student_Mobile}</p>
          <p>YearofJoined:-{student.year_of_join}</p>
        </>
    )

}

export default ViewStd;