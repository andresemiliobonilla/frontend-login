import React, {useEffect, useState} from 'react'
import authService from '../services/auth.services'
import {useHistory} from 'react-router-dom'

const Usuarios = () => {
  
  const history = useHistory();
  const [content, setContent] = useState({})
  
  useEffect(() => {
    const data = async () => {
      const token = JSON.parse(localStorage.getItem("user"));
      if(!token){
        return history.push('/login');
      }
      try{
        const {data} = await authService.getUserBoard();
        setContent({
          correo: data.message.correo,
          clave: data.message.clave,
          usuario: data.message.usuario,
          role: data.message.roles[0].name
        })
      }
      catch(error){
        return history.push('/login');
      }
    }
    data();
  },[history])

  return (
    <div className="container">
      <p> 
        {content.usuario}
      </p>
      <p> 
        {content.correo}
      </p>
      <p> 
        {content.clave}
      </p>
      <p> 
        {content.role}
      </p>

    </div>
  )
}

export default Usuarios;
