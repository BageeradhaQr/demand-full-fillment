import React from 'react';
import './App.css';

const initialState = {
    userinput:{},
    errmessage:{}
}

class Register extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            firstName:" ",
            lastName:" ",
            email:" ",
            password:" ",
            secretPin:" ",
        }
       this.register=this.register.bind(this);
    }

    firstNameHandler = (event) =>{
        this.setState({firstName: event.target.value});
    }

    lastNameHandler = (event) =>{
        this.setState({lastName: event.target.value});
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

    register = (event) =>{
        fetch('http://localhost:8080/api/login/register',
        {method:'post',
         headers:{
        'Accept':'application/json',
        'content-Type':'application/json'
         },
          body:JSON.stringify({
          firstName:this.state.firstName,
          lastName:this.state.lastName,
         email:this.state.email,
         password:this.state.password,
         secretPin:this.state.secretPin
         })
       }).then((Response)=>Response.json()).then((result)=>{
     if(result.status=='Success')
     this.props.history.push("/login");
     else
     alert('sorry!Un-authorized user')

    })

        
       
    }

    // myChangeHandler = (event) => {
    //     this.setState({
    //         [event.target.name]:event.target.value
    //     })
    // }
    render(){
        return(
            <form >
                <h1>Stater-Demand & Fulfillment Portal</h1>
                <h2>Register New Account</h2><br></br>

                <div>
                    <label for="firstName">First Name:</label>
                    <input type="text" name="firstName" placeholder="Enter Your First Name" value={this.state.firstName}
                    onChange={this.firstNameHandler}/>
                    
                    
                </div>

                <div>
                    <label for="lastName">Last Name:</label>
                    <input type="text" name="lastName" placeholder="Enter Your Last Name" value={this.state.lastName}
                    onChange={this.lastNameHandler}/>
                    
                </div>

                <div>
                    <label for="email">EmailId:</label>
                    <input type="text" name="email" placeholder="Enter EmailId" value={this.state.email}
                    onChange={this.emailHandler}/>
                    
                </div>

                <div>
                    <label for="password">Password:</label>
                    <input type="password" name="password" placeholder="Enter Password" value={this.state.password}
                    onChange={this.passwordHandler}/>
                    
                </div>

                {/* <div>
                    <label for="confirmpassword">Confirm Password:</label>
                    <input type="password" name="confirmpassword" placeholder="Confirm Password" value={this.state.userinput.confirmpassword}
                    onChange={this.myChangeHandler}/>
                    <div className="errMsg">{this.state.errmessage.confirmpassword}</div>
                </div> */}

                <div>
                    <label for="secretPin">Generate Secret Pin:</label>
                    <input type="text" name="secretPin" placeholder="Enter Your Secret Pin" value={this.state.secretPin}
                    onChange={this.secretPinHandler}/>
                    
                </div>

                <button type='submit' className="button" onClick={this.register}>Signup</button><br></br>
                Already have a account? <a href="/login" className="login">Login</a><br></br><br></br>
                </form>
        );
    }
}

export default Register;
