import React,{useState} from 'react'
import axios from 'axios'

const Volunteer = () => {

  const [volunteer,setVolunteer]=useState({
    StudentID:"",
    ProjectID:"",
    FromDate:"",
    ToDate:"",
   
  });


  const handleOnChange= e=>{
  
    setVolunteer({
      ...volunteer,
      [e.target.name]: e.target.value,
    })
  
  }
  
  const handleClick= ()=>{
    console.log(volunteer);


  axios.post('http://localhost:3001/volunteer',volunteer)
  .then(res=>{}).catch(err=>console.log(err));

  
  }




  return (
    <div>

<h2 className="headerh">Volunteer for a project</h2>



<div className="formh">
<div className="form-grouph">
      <label htmlFor="StudentID">StudentID</label>
      <input onChange={handleOnChange}   type="text" name="StudentID" placeholder="StudentID"/>
       </div>
       <div className="form-grouph">
      <label htmlFor="ProjectID">ProjectID</label>
      <input onChange={handleOnChange}   type="text" name="ProjectID" placeholder="ProjectID"/>
       </div>
       <div className="form-grouph">
      <label htmlFor="FromDate">FromDate</label>
      <input  onChange={handleOnChange}  type="text" name="FromDate" placeholder="FromDate"/>
       </div>
       <div className="form-grouph">
      <label htmlFor="ToDate">ToDate</label>
      <input onChange={handleOnChange}  type="text" name="ToDate" placeholder="ToDate"/>
       </div>

       <div className="footerh">
    <button onClick={handleClick} className="btnh" type="button">
      Volunteer

    </button>
  </div>
     
</div>


      
    </div>
  )
}

export default Volunteer
