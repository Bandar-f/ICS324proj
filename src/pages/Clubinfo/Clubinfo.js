import React, { useState } from 'react'
import './Clubinfo.css';
import axios from 'axios';



const Clubinfo = () => {


  const[ClubdID,setClubID]=useState({
            ClubID:"",


           });



  const[result,setResult]=useState();


  const handleOnChange= e=>{
  

  
    setClubID({
      ...ClubdID,
      [e.target.name]: e.target.value,
    })
  
  }


  const handleClickNclubMembers= ()=>{



  axios.get(`http://localhost:3001/getmembers/${ClubdID.ClubID}`)
  .then(res=>{setResult(res.data[0].NumberOfMembers);}).catch(err=>console.log(err));
  }



  const handleClickNclubProjects=()=>{

  axios.get(`http://localhost:3001/getprojects/${ClubdID.ClubID}`)
  .then(res=>{setResult(res.data[0].Numberofproject);}).catch(err=>console.log(err));
  } 

    


  return (
    <div>
      <h2 className="headerh">Please Enter Club ID</h2>


<div className="formh">
      
          <div className="form-grouph">
        <label htmlFor="ClubID">Club Id</label>
        <input onChange={handleOnChange} type="text" name="ClubID" placeholder="ClubID"/>
          </div>



          <h3 style={{textAlign:"center"}}>{result}</h3>

      

         <div className="footerh">
    <button onClick={handleClickNclubMembers} className="btnh button-place" type="button">
        Get Club members
    </button>

    <button onClick={handleClickNclubProjects} className="btnh button-place" type="button">
     Get club projects
    </button>

  </div>

</div>
    </div>
  )
}

export default Clubinfo
