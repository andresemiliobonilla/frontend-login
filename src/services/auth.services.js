import axios from 'axios';

const token = JSON.parse(localStorage.getItem("user"));

class authService {
  getCurrentUser()
  {
    return JSON.parse(localStorage.getItem("user"))
  }

  logOut()
  {
    localStorage.removeItem("user")
  }

  getUserBoard()
  {
    return axios.get('https://abonilla01.herokuapp.com/contenido/usuario', {headers: {"x-access-token": token.miToken}})
  }

  getAdminBoard()
  {
    return axios.get('https://abonilla01.herokuapp.com/contenido/admin', {headers: {"x-access-token": token.miToken}})
  }

  getModContent()
  {
    return axios.get('https://abonilla01.herokuapp.com/contenido/moderador', {headers: {"x-access-token": token.miToken}})
  }
}

export default new authService();