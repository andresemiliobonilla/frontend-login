import React, {useState, useEffect} from 'react'
import authService from '../services/auth.services';

const Usuario = () => {

  const [content, setContent] = useState({});
  const [errores, setErrores] = useState({});

  useEffect(() => {
    const data = () => {
      authService.getUserBoard()
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

export default Usuario;
