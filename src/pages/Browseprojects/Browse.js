import React,{useState} from 'react'
import axios from 'axios';


const Browse = () => {

  const[projects,setProjects]=useState([]);
  const[ClubdID,setClubID]=useState({
    ClubID:"",
  });


   const handleOnChange= e=>{
  

     setClubID({
       ...ClubdID,
       [e.target.name]: e.target.value,
     })
  
   }


   const handleClick= ()=>{



   axios.get(`http://localhost:3001/getpinfo/${ClubdID.ClubID}`)
   .then(res=>{
     
    setProjects(res.data);

  
  }).catch(err=>console.log(err));
  



   }






  return (
    <div>
      <h2 className="headerh">Current projects</h2>


      <div className="formh">

      <div className="form-grouph">
        <label htmlFor="ClubID">Club ID</label>
        <input onChange={handleOnChange}  type="text" name="ClubID" placeholder="ClubID"/>
         </div>

         <button onClick={handleClick}  className="btnh" type="button">
         Find projects

    </button>

      </div>



   {projects.map((item,index)=><div className="formh">

<h3>{item.Name}</h3>
<h5>{item.ID}</h5>
<p>{item.Description}</p>

</div>
   )}

 


  

  


      
    </div>
  )
}

export default Browse
