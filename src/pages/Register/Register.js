import React,{useState} from 'react'
import axios from 'axios';

const Register = () => {



  const[register,setRegister]=useState({
    StudentID:"",
    ClubID:"",
  });



  const handleOnChange= e=>{
  
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    })
  
  }
  
  const handleClick= ()=>{
    console.log(register);


  axios.post('http://localhost:3001/register',register)
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
       Register
        </button>
  </div>

</div>
      
    </div>
  )
}

export default Register
