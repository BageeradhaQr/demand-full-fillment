import React from 'react';
import './App.css';

class ResetPassword extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={email: '', password: '',pin: '', message: ''}
    }

    mySubmitHandler = (event) =>
    {
        fetch('http://localhost:8080/api/login/forgotPassword',
        {method:'post',
         headers:{
        'Accept':'application/json',
        'content-Type':'application/json'
         },
          body:JSON.stringify({
         email:this.state.email,
         password:this.state.password,
         secretPin:this.state.secretPin
         })
       }).then((Response)=>Response.json()).then((result)=>{
     console.log(result);  
    })
        //event.preventDefault();
        alert("Password reset Successfully!! You may now Login.");
        this.props.history.push("/login");
    }

   
    emailHandler= (event) =>{
        this.setState({email: event.target.value});
    }

    passwordHandler =(event)=>{
        this.setState({password: event.target.value});
    }

    secretPinHandler = (event) =>{
        this.setState({secretPin: event.target.value});
    }

    render(){
        return(
            <form onSubmit={this.mySubmitHandler}>
                <h1>Stater- Demand & Fulfillment Portal</h1>
                <h2>Reset Your Password</h2>
                <label>EmailId:</label>
                <input type="text" name="email" placeholder="Enter EmailId" 
                onChange={this.emailHandler}/><br></br><br></br>

                <label>Confirm Secret Pin:</label>
                <input type="text" name="secretPin" placeholder="Confirm Your Secret Pin" 
                onChange={this.secretPinHandler}/><br></br><br></br>

                <label>New Password:</label>
                <input type="password" name="password" placeholder="Enter New Password" 
                onChange={this.passwordHandler}/><br></br><br></br>

                <label>Confirm Password:</label>
                <input type="password" name="confirmpassword" placeholder="Confirm Password" value={this.state.password} onChange={this.password}/><br></br><br></br>

                <button type='submit' className="button" onClick={this.mySubmitHandler}>submit</button><br></br>
                <a href="/login" className="login">Login</a><br></br><br></br>
            </form>
        );
    }
}

export default ResetPassword;