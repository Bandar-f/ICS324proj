import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';



export const SidebarcAdmin=[
{
  title:'Add Project',
  path:'/Addproject',
  icons: <AiIcons.AiFillHome/>,
  cName:'nav-text',

},

{
  title:'Update project',
  path:'/Updateproject',
  icons: <FaIcons.FaCartPlus/>,
  cName:'nav-text',


},
{
  title:'Add project member',
  path:'/Addprojectmember',
  icons: <FaIcons.FaEnvelopeOpenText/>,
  cName:'nav-text',


},
{
  title:'Club information',
  path:'/Clubinfoadmin',
  icons: <FaIcons.FaEnvelopeOpenText/>,
  cName:'nav-text',


},

{
  title:'Join requests',
  path:'/Joinrequests',
  icons: <FaIcons.FaEnvelopeOpenText/>,
  cName:'nav-text',


},


{
  title:'Logout',
  path:'/',
  icons: <FaIcons.FaEnvelopeOpenText/>,
  cName:'nav-text',


},


]