import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route,useLocation} from 'react-router-dom';
import Addclub from './pages/Addclub/Addclub.js';
import Login from './components/Login/Login';
import Loginpage from './pages/LoginPage/Loginpage';
import Addnewmember from './pages/Addnewmember/Addnewmember';
import Promote from './pages/promoteclubmember/Promote';
import Clubinfo from './pages/Clubinfo/Clubinfo';
import { useState } from 'react';
import Addprject from './pages/Addproject/Addprject';
import Updateproject from './pages/Updateproject/Updateproject';
import Addprojectmember from './pages/Addprojectmember/Addprojectmember';
import Clubinfoadmin from './pages/Clubinfoadmin/Clubinfoadmin';
import Joinrequest from './pages/Joinrequest/Joinrequest';
import Terminate from './pages/Terminate/Terminate';
import Browse from './pages/Browseprojects/Browse';
import Volunteer from './pages/Volunteer/Volunteer';
import Register from './pages/Register/Register';
import Br from './pages/Browseclubs/Browse'

function App() {


  const [userType,setUserType]=useState(1);


  const setUser=(Num)=>{

    setUserType(Num);


  }




  let currentRoute = useLocation().pathname;

  return (
    <>

        { currentRoute==="/"?  ""  :  <Navbar userType={userType}/> }

      <Switch>
        <Route exact path="/" >
          <Loginpage userType={userType} setUser={setUser}/>

          </Route>


        <Route exact path="/Addclub" component={Addclub}/>  

        <Route exact path="/Addclubmember" component={Addnewmember}/>


        <Route exact path="/promotemember" component={Promote}/>

        <Route exacth path="/Clubinformation" component={Clubinfo}/>


        <Route exacth path="/Addproject" component={Addprject}/>

        <Route exacth path="/Updateproject" component={Updateproject}/>

        <Route exacth path="/Addprojectmember" component={Addprojectmember}/>



        <Route exacth path="/Clubinfoadmin" component={Clubinfoadmin}/>
        

        <Route exacth path="/Joinrequests" component={Joinrequest}/>

        <Route exact path="/Browseprojects" component={Browse}/>

        <Route exact path="/Volunteer" component={Volunteer}/>


        <Route exacth path="/Terminate" component={Terminate}/>

        <Route exacth path="/register" component={Register}/>

        <Route exact path="/Browseclubs" component={Br}/>





      </Switch>

    </>
  );
}

export default App;
