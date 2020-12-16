import React,{useState} from 'react'
import loginImg from './login.svg';
import './style.scss';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';


const Login = (props) => {


  const [pass,setPass]=useState(false);

  const[log,setLog]=useState({
    StudentID:"",
    Phone:"",

  });



  const handleOnChange= e=>{
  
    setLog({
      ...log,
      [e.target.name]: e.target.value,
    })
  
  }
  
  const handleClick= ()=>{
    //console.log(log);


  axios.post('http://localhost:3001/login',log)
  .then(res=>{
          

    props.setUser(parseInt((res.data[0].ID+"").charAt(0),10));



    if(res.data.length===1)
        setPass(true);







  }).catch(err=>console.log(err));

  
  }









  return (
    <div className='base-container' ref={props.containerRef}>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          
          <div className="form-group">
            <label htmlFor="StudentID">StudentID</label>
            <input onChange={handleOnChange} type="text" name="StudentID" placeholder="StudentID"/>
          </div>

          <div className="form-group">
            <label htmlFor="Phone">Phone</label>
            <input onChange={handleOnChange} type="Phone" name="Phone" placeholder="Phone"/>
          </div>

        </div>
      </div>

      {pass ? 
						<Redirect to={props.userType === 0 ? '/Addclub' : props.userType===1 ? "/Addproject":"/Browseprojects"} />: ''}



      <div className="footer">
        <button onClick={handleClick} className="btn" type="button">
          Login

        </button>

      

      </div>
      
    </div>
  )
}

export default Login
