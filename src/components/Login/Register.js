import React from 'react'
import loginImg from './login.svg';


const Register = (props) => {
  return (
    <div className='base-container' ref={props.containerRef}>
      <div className="header">Register</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="studentID">studentID</label>
            <input type="text" name="studentID" placeholder="studentID"/>
          </div>

          <div className="form-group">
            <label htmlFor="Phone">Phone</label>
            <input type="email" name="Phone" placeholder="Phone"/>
          </div>

          <div className="form-group">
            <label htmlFor="password">password</label>
            <input type="password" name="password" placeholder="password"/>
          </div>
        </div>
      </div>

      <div className="footer">
        <button className="btn" type="button">
          Register

        </button>
      </div>
      
    </div>
  )
}

export default Register
