import React, { useState } from "react";
import axios from "axios";
import { Form, FormGroup, Label, Input } from "reactstrap";

const Dashboard = () => {
  const [nota, setNota] = useState({});

  const inputChange = (e) => {
    const { name, value } = e.target;
    setNota({
      ...nota,
      [name]: value,
    });
  };

  // enviar notificaciones
  const formSubmit = (e) => {
    e.preventDefault();
    const token = JSON.parse(localStorage.getItem("user"));

    axios
      .post("https://abonilla01.herokuapp.com/user/dashboard", nota, {
        headers: { "x-access-token": token.miToken },
      })
      .then((res) => {
        console.log("nota guardada");
        // setNota('')
      })
      .catch((err) => console.log(err));
    // console.log(nota);
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h3>Informacion:</h3>
            <h5>Notificaciones de guardia - mensaje del Moderador</h5>
            <h5>Noticias del Edificio - mensaje del Administrador </h5>
          </div>
          <div className="col-12 col-md-4">
            <h3>Informacion:</h3>
            <h5>Informacion de PAgos</h5>
            <h5>Estadisticas</h5>
          </div>
          <div className="col-12 col-md-4">
            <div className="formularioNotas">
              <h3>Formulario de notas</h3>
              <Form onSubmit={formSubmit}>
                <FormGroup>
                  <Label for="usuario">fecha</Label>
                  <Input
                    value=""
                    name="fecha"
                    placeholder="fecha"
                    type="text"
                    onChange={inputChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="usuario">mensaje</Label>
                  <Input
                    name="mensaje"
                    placeholder="mensaje"
                    type="textarea"
                    onChange={inputChange}
                  />
                </FormGroup>
                <button type="submit" className="btn btn-primary">
                  enviar nota
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Dashboard;
