import React,{useState} from 'react';
import {Link} from 'react-router-dom';
function Student(){
    return(
        <>
        <h1>Students</h1>
        <Link to='/addStudent'>Add a Student</Link><br/>
        <Link to='/delete'>Delete</Link><br/>
        <Link to='/display'>Display</Link><br/>
        <Link to='/Edit'>Edit</Link><br/>
        </>
    )

}
export default Student;