import React, { useEffect, useState } from 'react'
import getAdminContent from '../services/auth.services';

const Administrador = () => {

  const [content, setContent] = useState({
    contenido: "",
    usuarios: null
  });
  const [errores, setErrores] = useState({});

  useEffect(() => {
    const data = () => {
      getAdminContent.getAdminBoard()
        .then(res => {
          setContent({
            contenido: res.data.message,
            usuarios: res.data.usuarios
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

  // console.log(content.usuarios)

  const {usuarios} = content;

  return (
    <>
      <div>
        <h1>
          {content.contenido}
          {errores.errores}
        </h1>

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
              </tr>
            </thead>
            <tbody>

              { usuarios ?
                usuarios.map(usuario => (
                  <tr key={usuario._id}>
                    <th>{usuario.usuario}</th>
                    <td>{usuario.correo}</td>
                  </tr>
                ))
                :
                <tr>
                  <th></th>
                  <td></td>
                </tr>
              }
               
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Administrador
