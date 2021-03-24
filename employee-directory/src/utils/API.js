import axios from "axios";

export default {
    getEmployeeData: function() {
        return axios.get("https://randomuser.me/api/?results=100")
    }
};
