import axios from 'axios'

const User_Rest_Api_Url='http://localhost:8080/api/users';

class UserService{
    getUsers()
    {
      return  axios.get(User_Rest_Api_Url);
    }

    getDemandById(demand_no){
      return axios.get(User_Rest_Api_Url + '/' + demand_no);
    }

    createDemand(demand){
      return axios.post(User_Rest_Api_Url, demand);
    }

    updateDemand(demand, demand_no){
      return axios.put(User_Rest_Api_Url + '/' + demand_no,demand);
    }

    deleteDemand(demand_no){
      return axios.delete(User_Rest_Api_Url + '/' + demand_no);
    }
}
export default new UserService();