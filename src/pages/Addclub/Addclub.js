import React, { useState } from 'react'
import  './Addclub.css';
import axios from 'axios';


const Addclub = () => {




  const [Club,setClub]=useState({
    ID:"",
    Name:"",
    Address:"",
    Phone:"",
    Description:"",
    DepartmentID:"",
    StatusID:"",
  });


const handleOnChange= e=>{
  
  setClub({
    ...Club,
    [e.target.name]: e.target.value,
  })

}

const handleClick= ()=>{
  console.log(Club);
axios.post('http://localhost:3001/addclub',Club)
.then(res=>{}).catch(err=>console.log(err));
}





  return (
    <div>


      <h2 className="headerh">Please Enter Club information</h2>


    <div className="formh">
          
              <div className="form-grouph">
            <label htmlFor="ID">ID</label>
            <input onChange={handleOnChange}  type="text" name="ID" placeholder="ID"/>
              </div>

              <div className="form-grouph">
            <label htmlFor="Name">Name</label>
            <input onChange={handleOnChange}  type="text" name="Name" placeholder="Name"/>
             </div>

             <div className="form-grouph">
            <label htmlFor="Phone">Phone</label>
            <input onChange={handleOnChange}  type="text" name="Phone" placeholder="Phone"/>
             </div>

             <div className="form-grouph">
            <label htmlFor="Address">Address</label>
            <input onChange={handleOnChange}  type="text" name="Address" placeholder="Address"/>
             </div>

             <div className="form-grouph">
            <label htmlFor="Description">Description</label>
            <input onChange={handleOnChange}  type="text" name="Description" placeholder="Description"/>
             </div>

             <div className="form-grouph">
            <label htmlFor="DepartmentID">DepartmentID</label>
            <input onChange={handleOnChange}  type="text" name="DepartmentID" placeholder="DepartmentID"/>
             </div>


             <div className="form-grouph">
            <label htmlFor="StatusID">StatusID</label>
            <input onChange={handleOnChange}  type="text" name="StatusID" placeholder="StatusID"/>
             </div>



             <div className="footerh">
        <button onClick={handleClick} className="btnh" type="button">
          Add club

        </button>
      </div>

    </div>
        
        
  </div>
  )
}

export default Addclub;
