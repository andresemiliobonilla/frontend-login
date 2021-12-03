import axios from 'axios';

const token = JSON.parse(localStorage.getItem("user"));
const urlServer = 'http://localhost:4000/user/dashboard';
// const urlServer = 'https://abonilla01.herokuapp.com/user/dashboard';


export const PostDashboard = () => {
  return axios.get(urlServer, {headers: { "x-access-token": token.miToken }})
}

export const veriTokenWeb = (veriToken) => {
  return axios.get(urlServer, {headers: { "x-access-token": veriToken }})
} 