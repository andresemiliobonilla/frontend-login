import axios from 'axios';

const token = JSON.parse(localStorage.getItem("user"));
const urlServer = 'http://localhost:4000';
// const urlServer = 'https://abonilla01.herokuapp.com';

class authService {

  loginUser(data)
  {
    return axios.post(urlServer + '/auth/login', data);
  }

  getCurrentUser()
  {
    return JSON.parse(localStorage.getItem("user"))
  }

  hayToken()
  {
    return localStorage.getItem('user');
  }

  logOut()
  {
    localStorage.removeItem("user");
  }

  getUserBoard()
  {
    return axios.get(urlServer + '/contenido/usuario', {headers: {"x-access-token": token.miToken}});
  }

  getAdminBoard()
  {
    return axios.get(urlServer + '/contenido/administrador', {headers: {"x-access-token": token.miToken}});
  }

  getModBoard()
  {
    return axios.get(urlServer + '/contenido/moderador', {headers: {"x-access-token": token.miToken}});
  }
}

export default new authService();