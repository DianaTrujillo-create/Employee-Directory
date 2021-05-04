/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios';

export const APIURL = "https://randomuser.me/api/?results=20&nat=us&inc=picture,name,email,phone,dob&noinfo";

export default {
    fetchEmployees: function () {
        return axios.get(APIURL);
    }
};
