import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';



export const SidebarData=[
{
  title:'Add club',
  path:'/addclub',
  icons: <AiIcons.AiFillHome/>,
  cName:'nav-text',

},

{
  title:'Add club member',
  path:'/Addclubmember',
  icons: <FaIcons.FaCartPlus/>,
  cName:'nav-text',


},
{
  title:'Promote member',
  path:'/promotemember',
  icons: <FaIcons.FaEnvelopeOpenText/>,
  cName:'nav-text',


},
{
  title:'Club information',
  path:'/Clubinformation',
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