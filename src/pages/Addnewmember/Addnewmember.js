import React, { useState } from 'react'
import './addnewmember.css'
import axios from 'axios';


const Addnewmember = () => {


  const [member,setMember]=useState({
    ClubID:"",
    StudentID:"",
    FromDate:"",
    ToDate:"",
    StatusID:"",
  })




  const handleOnChange= e=>{
    

  
    setMember({
      ...member,
      [e.target.name]: e.target.value,
    })
  
  }


  const handleClick= ()=>{


    console.log(member);

  axios.post('http://localhost:3001/addmember',member)
  .then(res=>{}).catch(err=>console.log(err));
  }









  return (
    <div>

<h2 className="headerh">Please Enter Member Information</h2>


<div className="formh">
      
          <div className="form-grouph">
        <label htmlFor="ClubID">Club Id</label>
        <input onChange={handleOnChange} type="text" name="ClubID" placeholder="Club Id"/>
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
        <input onChange={handleOnChange} type="text" name="ToDate" placeholder="ToDate"/>
         </div>

         <div className="form-grouph">
        <label htmlFor="StatusID">StatusID</label>
        <input onChange={handleOnChange}  type="text" name="StatusID" placeholder="StatusID"/>
         </div>



         <div className="footerh">
    <button onClick={handleClick} className="btnh" type="button">
      Add Member

    </button>
  </div>

</div>
      
    </div>
  )
}

export default Addnewmember
