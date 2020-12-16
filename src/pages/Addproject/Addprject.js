import React, { useState } from 'react'
import axios from 'axios';

const Addprject = () => {


  const [project,setProject]=useState({
    ID:"",
    Name:"",
    ProjectTypeID:"",
    ClubID:"",
    Description:"",
    StartDate:"",
    EndDate:"",

  });


  const handleOnChange= e=>{
  
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    })
  
  }
  
  const handleClick= ()=>{
    console.log(project);


  axios.post('http://localhost:3001/addproject',project)
  .then(res=>{}).catch(err=>console.log(err));

  
  }












  return (
    <div>
        <h2 className="headerh">Please Enter Project information</h2>


<div className="formh">
      
          <div className="form-grouph">
        <label htmlFor="ID">ID</label>
        <input onChange={handleOnChange} type="text" name="ID" placeholder="ID"/>
          </div>

          <div className="form-grouph">
        <label htmlFor="Name">Name</label>
        <input onChange={handleOnChange}  type="text" name="Name" placeholder="Name"/>
         </div>

         <div className="form-grouph">
        <label htmlFor="ProjectTypeID">Project Type ID</label>
        <input onChange={handleOnChange}  type="text" name="ProjectTypeID" placeholder="Project Type ID"/>
         </div>

      

         <div className="form-grouph">
        <label htmlFor="ClubID">Club ID</label>
        <input onChange={handleOnChange}  type="text" name="ClubID" placeholder="ClubID"/>
         </div>

         <div className="form-grouph">
        <label htmlFor="Description">Description</label>
        <input onChange={handleOnChange}  type="text" name="Description" placeholder="Description"/>
         </div>

      

         <div className="form-grouph">
        <label htmlFor="StartDate">StartDate</label>
        <input onChange={handleOnChange}  type="text" name="StartDate" placeholder="StartDate"/>
         </div>

         <div className="form-grouph">
        <label htmlFor="EndDate">EndDate</label>
        <input onChange={handleOnChange}  type="text" name="EndDate" placeholder="EndDate"/>
         </div>

      

     



         <div className="footerh">
    <button onClick={handleClick} className="btnh" type="button">
      Add project

    </button>
  </div>

</div>
      
    </div>
  )
}

export default Addprject
