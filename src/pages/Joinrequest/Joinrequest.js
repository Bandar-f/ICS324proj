import React, { useState } from 'react'
import './join.css';
import axios from 'axios';

const Joinrequest = () => {

 const[join,setJoin]=useState({
  ClubID:"",
  StudentID:"",




 });

  const handleOnChange= e=>{
  
    setJoin({
      ...join,
      [e.target.name]: e.target.value,
    })
  
  }
  
  const handleClick= ()=>{
    console.log(join);


  axios.post('http://localhost:3001/acceptjoin',join)
  .then(res=>{}).catch(err=>console.log(err));

  
  }






  return (
    <div>

<h2 className="headerh">Join requests</h2>


<div className="formh">
      
          <div className="form-grouph">
        <label htmlFor="ClubID">Club Id</label>
        <input onChange={handleOnChange} type="text" name="ClubID" placeholder="ClubID"/>
          </div>


          <div className="form-grouph">
        <label htmlFor="StudentID">Student ID</label>
        <input onChange={handleOnChange}  type="text" name="StudentID" placeholder="StudentID"/>
          </div>


        

         <div className="footerh">

    <button onClick={handleClick} className="btnh button-place" type="button">
      Add to club
      </button>

  </div>

</div>
      
    </div>
  )
}

export default Joinrequest
