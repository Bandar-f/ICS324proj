import React, { useState } from 'react'
import axios from 'axios'

const Promote = () => {


  const[promote,setPromote]=useState({

    ClubID:"",
    StudentID:"",




  });






  const handleOnChange= e=>{
  
    setPromote({
      ...promote,
      [e.target.name]: e.target.value,
    })
  
  }
  
  const handleClick= ()=>{
    console.log(promote);
  axios.post('http://localhost:3001/promotemember',promote)
  .then(res=>{}).catch(err=>console.log(err));
  }







  return (
    <div>
      <h2 className="headerh">Please Enter new Admin information</h2>


<div className="formh">
      
          <div className="form-grouph">
        <label htmlFor="ClubID">Club Id</label>
        <input onChange={handleOnChange}  type="text" name="ClubID" placeholder="ClubID"/>
          </div>

          <div className="form-grouph">
        <label htmlFor="StudentID">StudentID</label>
        <input onChange={handleOnChange}  type="text" name="StudentID" placeholder="StudentID"/>
         </div>

         
         <div className="form-grouph">
        <label htmlFor="FromDate">FromDate</label>
        <input onChange={handleOnChange}  type="text" name="FromDate" placeholder="FromDate"/>
         </div>

         
         <div className="form-grouph">
        <label htmlFor="ToDate">ToDate</label>
        <input onChange={handleOnChange}  type="text" name="ToDate" placeholder="ToDate"/>
         </div>

       

      
    

         
        




  




         <div className="footerh">
    <button onClick={handleClick} className="btnh" type="button">
      Update role

    </button>
  </div>

</div>
      
    </div>
  )
}

export default Promote
