import React,{useState} from 'react';
import {Link,useNavigate} from 'react-router-dom';
function Dashboard(){
    const navigate = useNavigate();
    const college_id = localStorage.getItem("college_id");
    const LogOut = ()=>{
       console.log(college_id+"is Logout")
       localStorage.removeItem("college_id");
       navigate("/", { replace: true });
    }
    return(
        <>
          <p> This is Dashboard Page !</p>
          <button onClick={LogOut}>LogOut</button>
          <Link to='/student'>Student</Link>
          <Link to='/faculty'>Faculty</Link>
        </>
    )

}
export default Dashboard;