import React,{useState} from 'react';
import {Link} from 'react-router-dom';
function Student(){
    return(
        <>
        <h1>Students</h1>
        <Link to='/addStudent'>Add a Student</Link><br/>
        <Link to='/deleteStudent'>Delete</Link><br/>
        <Link to='/displayStudent'>Display</Link><br/>
        <Link to='/Edit'>Edit</Link><br/>
        </>
    )

}
export default Student;