import React, {useState, useEffect} from 'react'
import {PostDashboard} from '../services/funcion.services';

const Dashboard = () => {

  const [content, setContent] = useState({});
  const [errores, setErrores] = useState({});

  useEffect(() => {
    const data = () => {
      PostDashboard()
        .then(res => {
          setContent({
            contenido: res.data.message
          })
        }, error => {
          setErrores({
            errores:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          })
        })
    }

    data();

  }, [])

  return (
    <div>
      {content.contenido}
      {errores.errores}
    </div>
  )
}

export default Dashboard;
