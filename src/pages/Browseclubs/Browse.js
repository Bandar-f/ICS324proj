import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Browse = () => {

  const[clubs,setClubs]=useState([]);

  useEffect(()=>{


    axios.get(`http://localhost:3001/gettotaolc`)
    .then(res=>{
      
      setClubs(res.data);
 
   
   }).catch(err=>console.log(err));


  },[]);
  


   



  return (
    <div>


<h2 className="headerh">Clubs</h2>






{clubs.map((item,index)=><div className="formh">

<h3>{item.Name}</h3>
<h5>{item.ID}</h5>
<p>{item.Description}</p>

</div>
)}

      
    </div>
  )
}

export default Browse
