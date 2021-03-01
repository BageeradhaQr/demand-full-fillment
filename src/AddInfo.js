import React from 'react';
import  { Component } from 'react';
import './App.css';
import UserService from './UserService';

class AddInfo extends Component {
    constructor(props) {
        super(props)

        this.state ={
            demand_no:this.props.match.params.demand_no,
            tms_id: '',
            infy_unit: '',
            team_name: '',
            requested_by: '',
            technology: '',
            skills1: '',
            skills2: '',
            requested_date: '',
            start_date: '',
            location: '',
            stater_role: '',
            fulfillment_status: '',
            shared_date: '',
            interview_date: '',
            selection_date: '',
            emp_id: '',
            resource_name: '',
            onboarding_status: '',
            onboarding_date: '',
            comments: '',
             }

             this.myChangeHandler = this.myChangeHandler.bind(this);
             this.mySubmitHandler = this.mySubmitHandler.bind(this);
        
        }

        componentDidMount(){
            if(this.state.demand_no === '_add'){
                return
            }
        }

        mySubmitHandler = (e) => {
            e.preventDefault();
            let demand = {tms_id: this.state.tms_id,
                infy_unit: this.state.infy_unit,
                team_name: this.state.team_name,
                requested_by: this.state.requested_by,
                technology: this.state.technology,
                skills1: this.state.skills1,
                skills2: this.state.skills2,
                requested_date: this.state.requested_date,
                start_date: this.state.start_date,
                location:this.state.location,
                stater_role: this.state.stater_role,
                fulfillment_status: this.state.fulfillment_status,
                shared_date: this.state.shared_date,
                interview_date: this.state.interview_date,
                selection_date: this.state.selection_date,
                emp_id: this.state.emp_id,
                resource_name: this.state.resource_name,
                onboarding_status: this.state.onboarding_status,
                onboarding_date: this.state.onboarding_date,
                comments: this.state.comments,
            };
            console.log('demand => ' + JSON.stringify(demand));

            if(this.state.id === '_add'){
                UserService.createDemand(demand).then(res =>{
                    this.props.history.push('/home');
                });
            }
        }

        myChangeHandler = (event)=> {
            this.setState({
                [event.target.name]:event.target.value})
            }

        cancel(){
            this.props.history.push('/home');
        }

        getTitle(){
            if(this.state.id === '_add'){
                return <h3 className="text-center"> Add New Demand</h3>
            }
        }
        render(){
            return(
                <div>
                    <br></br>
                    <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label for ="tms_id">TMS ID(Infosys):</label>
            <input type="text" name="tms_id" placeholder= "Enter TMS ID" value={this.state.tms_id}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="team_name">Team Name:</label>
            <input type="text" name="team_name" placeholder= "Enter Team Name" value={this.state.team_name}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="requested_by">Requested By:</label>
            <input type="text" name="requested_by" placeholder= "Requested By" value={this.state.requested_by}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="technology">TMS ID(Infosys):</label>
            <input type="text" name="technology" placeholder= "Enter Technology" value={this.state.technology}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="skills1">Key Skils(Must Have):</label>
            <input type="text" name="skills1" placeholder= "Enter Key Skills(Must Have)" value={this.state.skills1}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="skills2">Key Skils(Good to Have):</label>
            <input type="text" name="skills2" placeholder= "Enter Key Skills(Good to Have)" value={this.state.skills2}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="requested_date">Requested Date(Stater):</label>
            <input type="date" name="requested_date" placeholder= "Enter Requested Date(Stater)" value={this.state.requested_date}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="start_date">Potential Start Date:</label>
            <input type="date" name="start_date" placeholder= "Enter Potential Start Date" value={this.state.start_date}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="location">Location:</label>
            <input type="text" name="location" placeholder= "Enter Location" value={this.state.location}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="stater_role">Stater Role:</label>
            <input type="text" name="stater_role" placeholder= "Enter Stater Role" value={this.state.stater_role}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="fulfillment_status">Fulfillment Status:</label>
            <select name = "dropdown" name="fulfillment_status"  value={this.state.fulfillment_status}>
                <option value = "Enter Fulfillment Status" selected>Fulfillment Status</option>
                <option value = "Open" >Open</option>
                <option value = "Identified" >Identified </option>
                <option value = "Selected" > Selectd</option>
             </select>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="shared_date">Profile Shared Date:</label>
            <input type="date" name="shared_date" placeholder= "Enter Profile Shared Date" value={this.state.shared_date}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="interview_date">Interview Date:</label>
            <input type="date" name="interview_date" placeholder= "Enter Interview Scheduled Date" value={this.state.interview_date}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="selection_date">Selection Date:</label>
            <input type="date" name="selection_date" placeholder= "Enter Selection Date" value={this.state.selection_date}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="emp_id">Emp ID:</label>
            <input type="text" name="emp_id" placeholder= "Enter Emp ID" value={this.state.emp_id}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="resource_name">Resource Name:</label>
            <input type="text" name="resource_name" placeholder= "Enter Resource Name" value={this.state.resource_name}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="onboarding_status">Resource Name:</label>
            <input type="text" name="onboarding_status" placeholder= "Enter Onboarding Status" value={this.state.onboarding_status}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="onboarding_date">Resource Name:</label>
            <input type="date" name="onboarding_date" placeholder= "Enter Onboarding Date" value={this.state.onboarding_date}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label for ="comments">Comments:</label>
            <input type="text" name="comments" placeholder= "Enter Comments" value={this.state.comments}
            class= "form-control" onChange={this.myChangeHandler}/>
                                        </div>


                                    <button className="btn btn-success" onClick={this.mySubmitHandler}>Save</button>
                                    <button className="btn btn-success" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
 }

 export default AddInfo;