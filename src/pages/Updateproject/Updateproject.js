import React, { useState } from 'react'
import axios from 'axios'

const Updateproject = () => {

  const [update,setUpdate]= useState({
    ID:"",
    StatusID:"",


  });



  const handleOnChange= e=>{
  
    setUpdate({
      ...update,
      [e.target.name]: e.target.value,
    })
  
  }
  
  const handleClick= ()=>{
    console.log(update);
  axios.post('http://localhost:3001/UpdateProject',update)
  .then(res=>{}).catch(err=>console.log(err));
  }











  return (
    <div>

<h2 className="headerh">Please Enter Project ID and provide status</h2>


<div className="formh">
      
          <div className="form-grouph">
        <label htmlFor="ID">ID</label>
        <input onChange={handleOnChange} type="text" name="ID" placeholder="ID"/>
          </div>

          <div className="form-grouph">
        <label htmlFor="StatusID">StatusID</label>
        <input onChange={handleOnChange} type="text" name="StatusID" placeholder="StatusID"/>
         </div>

      



         <div className="footerh">
    <button onClick={handleClick} className="btnh" type="button">
      Update
    </button>
  </div>

</div>
      
    </div>
  )
}

export default Updateproject
