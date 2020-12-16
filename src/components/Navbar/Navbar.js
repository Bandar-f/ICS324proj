import React, { useEffect, useState } from 'react'
import * as FaIcons from 'react-icons/fa';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import * as AiIcons from 'react-icons/ai';
import {IconContext} from 'react-icons';
import {SidebarcAdmin} from './Sidebarcadmin';
import {SidebarMember} from './SidebarMember';
import {Sidebarguest} from './Sidebarguest';




const Navbar = (props) => {
    
  const [sidebar,setSidebar]= useState(false);
  let x=props.userType;


  const toggleSideBar= ()=> setSidebar(!sidebar);

const [menu,setMenu]=useState([]);

 useEffect(()=>{


  if(props.userType==0)
  setMenu(SidebarData);

  else if(props.userType==1)
  setMenu(SidebarcAdmin);
 
  else if(props.userType==2)
  setMenu(SidebarMember);
  else if(props.userType==3)
  setMenu(Sidebarguest);
  




 },[]);





  return (
    <>
     <IconContext.Provider value={{color:'#fff'}}>
    <div className='navbar' onClick={()=>console.log(x)}>
        
        <Link to="#" className="menu-bars">
           <FaIcons.FaBars onClick={toggleSideBar}/>

        </Link>

    </div>

    <nav className= {sidebar ? 'nav-menu active': 'nav-menu'}>
      

      <ul className="nav-menu-items">
        <li className="navbar-toggle">
          <Link to="#" className="menu-bars">
            <AiIcons.AiOutlineClose onClick={toggleSideBar}/>
          
          </Link>
        </li>
        {menu.map((item,index)=> <li key={index} className={item.cName}>
          <Link to={item.path}>
            {item.icons}
            <span>{item.title}</span>
          </Link>
        </li>)}
      </ul>




    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Navbar
