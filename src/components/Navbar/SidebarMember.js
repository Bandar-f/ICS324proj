import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';



export const SidebarMember=[
{
  title:'Browse projects',
  path:'/Browseprojects',
  icons: <AiIcons.AiFillHome/>,
  cName:'nav-text',

},

{
  title:'Terminate membership',
  path:'/Terminate',
  icons: <FaIcons.FaCartPlus/>,
  cName:'nav-text',


},{
  title:'Volunteer for project',
  path:'/Volunteer',
  icons: <FaIcons.FaCartPlus/>,
  cName:'nav-text',


},

{
  title:'Logout',
  path:'/',
  icons: <FaIcons.FaEnvelopeOpenText/>,
  cName:'nav-text',


},



]