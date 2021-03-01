import React from 'react';

import './App.css';
import './Login.css';
//import UserService from './UserService';

 

class Login extends React.Component

{
  constructor(props)

   {

    super(props);

    this.state={email: '', password:'', message:''}
     this.password=this.password.bind(this);
     this.email=this.email.bind(this);
    this.login=this.login.bind(this);

   }
   
   email = (event) =>{
     this.setState({email:event.target.value})
   }

   password = (event) =>{
     this.setState({password:event.target.value})
   }

   login =(event) =>{
     //debugger;
     fetch('http://localhost:8080/api/login/login',
     {method:'post',
       headers:{
      'Accept':'application/json',
      'content-Type':'application/json'
      },
      body:JSON.stringify({
      email:this.state.email,
      password:this.state.password
      })
    }).then((Response)=>Response.json()).then((result)=>{
  console.log(result);
       if(result.status==='invalid')
       alert('invalid User');
       else
       this.props.history.push("/home");
   })
   }

 
   

 

  render() {

    return(

      <form onSubmit={this.login}>

        <h1>Stater-Demand & Fulfillment Tracker</h1><br></br>

        <label>EmailId:</label>

        <input type="text" name="email" placeholder="Enter EmailId" value={this.state.email}

        onChange={this.email}/><br></br>

        <label>Password:</label>

        <input type="password" name="password" placeholder="Enter Password" value={this.state.password}

        onChange={this.password}/><br></br>

        <a href="/resetpassword" className="forgetpass">Forget Password</a><br></br><br></br>  

        {this.state.message !== '' && <div className={`text text-${this.state.textStyle}`}>{this.state.message}</div>}<br/>

        <button type='submit' className="button" onClick={this.login}>Login</button><br></br>

        <a href="/register" className="newacct">Create a new account</a><br></br><br></br>  

      </form>  

      

    );

  }

}

export default Login;