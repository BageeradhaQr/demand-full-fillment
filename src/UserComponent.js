import  React from 'react';
import UserService from './UserService';
import './App.css';
import {Link} from 'react-router-dom';

class UserComponent extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
            users:[]
        }
        this.addDemand = this.addDemand.bind(this);
        this.editDemand = this.editDemand.bind(this);
        this.deleteDemand = this.deleteDemand.bind(this);
    }

    addDemand(){
        this.props.history.push('/addinfo/_add');
    }

    deleteDemand(demand_no){
        UserService.deleteDemand(demand_no).then( res => {
            this.setState({users: this.state.users.filter(users => users.demand_no !== demand_no)});
        });
    }

    editDemand(demand_no){
        this.props.history.push(`/updateinfo/${demand_no}`);
    }
    /**this mis the life cycle method to call rest api */
    componentDidMount(){
        UserService.getUsers().then((response) =>
        {
            this.setState({users : response.data})
        })
    }
    render(){
        return(
            <div>
               {/*} <h1 className="text-center"> Stater: Demand & Fulfillment Tracker</h1> */}
                <div>
                    <Link to ="/login">
                        <button type = "submit" id='logout'>LogOut</button>
                    </Link>
                 </div>
                {/* <div>
                    <Link to="/addinfo">
                        <button type = "submit" variant="btn btn-success">Add New Demand</button>
                    </Link>
                </div> */}
                <button className="btn btn-primary" onClick={this.addDemand}>Add New Demand</button>
                    <table> 
                        <thead>
                            <tr>
                                <td>Demand No</td>
                                <td>TMS ID(Infosys)</td>
                                <td>Infosys Unit</td>
                                <td>Team Name</td>
                                <td>Requested By</td>
                                <td>Technology</td>
                                <td>Key Skills(Must Have)</td>
                                <td>Key Skills(Good to Have)</td>
                                <td>Requested Date(Stater)</td>
                                <td>Potential Start Date</td>
                                <td>Location</td>
                                <td>Stater Role</td>
                                <td>Fulfillment Status</td>
                                <td>Profile Shared Date</td>
                                <td>Interview Scheduled Date</td>
                                <td>Selection Date</td>
                                <td>Emp ID</td>
                                <td>Resource Name</td>
                                <td>Onboarding Status</td>
                                <td>Onboarding Date</td>
                                <td>Comments</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                    <tr key ={user.demand_no}>
                                        <td> {user.tms_id} </td>
                                        <td> {user.unit} </td>
                                        <td> {user.team_name} </td>
                                        <td> {user.requested_by} </td>
                                        <td> {user.technology} </td>
                                        <td> {user.skills_must_have} </td>
                                        <td> {user.skills_good_to_have} </td>
                                        <td> {user.requested_date} </td>
                                        <td> {user.start_date} </td>
                                        <td> {user.location} </td>
                                        <td> {user.stater_role} </td>
                                        <td> {user.fulfiment_status} </td>
                                        <td> {user.profile_shared_date} </td>
                                        <td> {user.interview_date} </td>
                                        <td> {user.selection_date} </td>
                                        <td> {user.emp_id} </td>
                                        <td> {user.resource_name} </td>
                                        <td> {user.onboarding_status} </td>
                                        <td> {user.onboarding_date} </td>
                                        <td> {user.comments} </td>
                                        {/* <td>
                                            <Link to ="/updateinfo">
                                                <button type ="submit">Update Row</button>
                                            </Link>
                                            <Link to ="/demo">
                                                <button type ="submit">Delete Row</button>
                                            </Link>
                                        </td> */}
                                        <td>
                                            <button onClick={ () => this.editDemand(user.demand_no)} className="btn btn-info">Update</button>
                                            <button style={{marginLeft: "10px"}} onClick={ () => this.deleteDemand(user.demand_no)} className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
            </div>
    
        )
    }
}


export default new UserComponent();