import React, { useState } from 'react'
import axios from 'axios';

const Addprojectmember = () => {


  const[pmember,setPmember]= useState({
    StudentID:"",
    ProjectID:"",
    FromDate:"",
    ToDate:"",

  });




  const handleOnChange= e=>{


  
    setPmember({
      ...pmember,
      [e.target.name]: e.target.value,
    })
  
  }
  
  const handleClick= ()=>{
    console.log(pmember);
  axios.post('http://localhost:3001/addpmember',pmember)
  .then(res=>{}).catch(err=>console.log(err));
  }





  const lhandleClick= ()=>{
    console.log(pmember);
  axios.post('http://localhost:3001/addpleader',pmember)
  .then(res=>{}).catch(err=>console.log(err));
  }








  return (
    <div>
        <h2 className="headerh">Please Enter Project and student information</h2>


<div className="formh">
      
          <div className="form-grouph">
        <label htmlFor="StudentID">Student ID</label>
        <input onChange={handleOnChange} type="text" name="StudentID" placeholder="StudentID"/>
          </div>

          <div className="form-grouph">
        <label htmlFor="ProjectID">ProjectID</label>
        <input onChange={handleOnChange} type="text" name="ProjectID" placeholder="ProjectID"/>
         </div>

         <div className="form-grouph">
        <label htmlFor="FromDate">FromDate</label>
        <input onChange={handleOnChange} type="text" name="FromDate" placeholder="FromDate"/>
         </div>

         <div className="form-grouph">
        <label htmlFor="ToDate">ToDate</label>
        <input onChange={handleOnChange} type="text" name="ToDate" placeholder="ToDate"/>
         </div>

       



         <div className="footerh">
         <div className="footerh">
    <button onClick={handleClick} className="btnh button-place" type="button">
      Add as member
    </button>

    <button onClick={lhandleClick} className="btnh button-place" type="button">
      Add as leader

    </button>

  </div>
  </div>

</div>
    </div>
  )
}

export default Addprojectmember
