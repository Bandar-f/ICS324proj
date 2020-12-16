import React,{useState} from 'react'
import axios from 'axios';

const Terminate = () => {

  const[terminate,setTerminate]=useState({
    StudentID:"",
    ClubID:"",
  });



  const handleOnChange= e=>{
  
    setTerminate({
      ...terminate,
      [e.target.name]: e.target.value,
    })
  
  }
  
  const handleClick= ()=>{
    console.log(terminate);


  axios.post('http://localhost:3001/terminate',terminate)
  .then(res=>{}).catch(err=>console.log(err));

  
  }













  return (
    <div>
         <h2 className="headerh">Please Enter Club ID</h2>


<div className="formh">

       <div className="form-grouph">
        <label htmlFor="StudentID">StudentID</label>
        <input onChange={handleOnChange} type="text" name="StudentID" placeholder="StudentID"/>
          </div>
      
          <div className="form-grouph">
        <label htmlFor="ClubID">Club ID</label>
        <input onChange={handleOnChange}  type="text" name="ClubID" placeholder="ClubID"/>
          </div>

          

         <div className="footerh">
    <button onClick={handleClick} className="btnh" type="button">
       Terminate membership
        </button>
  </div>

</div>
      
    </div>
  )
}

export default Terminate
