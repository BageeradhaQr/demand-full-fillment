import React from 'react';
//import logo from './logo.svg';
import './App.css';
import UserComponent from './UserComponent';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
import UpdateInfo from './UpdateInfo';
import AddInfo from './AddInfo';
//import Demo from './Demo';
import HeaderComponent from '/HeaderComponent';
import FooterComponent from '/FooterComponent';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
  <Router>
    <HeaderComponent/>
    <div className = "container">
    <Switch>
    <Route exact path = "/" component = {Login} />
    <Route path = "/login" component = {Login} />
    <Route path = "/register" component = {Register} />
    <Route path = "/resetpassword" component = {ResetPassword} />
    <Route path = "/addinfo" component = {AddInfo} />
    <Route path = "/updateinfo" component = {UpdateInfo} />
    <Route path = "/home" component = {UserComponent} />
    <Route path = "/header" component = {HeaderComponent} />
    <Route path = "/footer" component = {FooterComponent} />
    {/* <Route path = "/demo" component = {Demo} /> */}
    </Switch>
    </div>
    <FooterComponent />
  </Router> </div>
 );
 
}
   
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
