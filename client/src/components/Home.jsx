import React,{useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
function Home(){
    return(
        <>
         <p>Welcom to CampusVault.This is Home Page of CampusVault</p>
         <Link to='/login'>Login</Link><br></br>
         <Link to='/signin'>Signin</Link>
        </>
    )

}
export default Home;