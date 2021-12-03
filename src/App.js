// import "./App.css";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Register from "./views/Register";
import Administrador from "./views/Administrador";
import Moderador from "./views/Moderador";
import Usuario from "./views/Usuario";
import { useEffect, useState } from "react";
import Menu from './components/Menu';
import {RutaPrivada, RutaPublica} from './routes/routes';
import { veriTokenWeb } from "./services/funcion.services";
import authServices from "./services/auth.services";

function App() {
  const [categoria, setCategoria] = useState({
    administrador: false,
    moderador: false,
    usuario: false,
    currentUser: undefined,
  });
  const [content, setContent] = useState({});
  const [errores, setErrores] = useState({});

  useEffect(() => {

    const verifyToken = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if(user)
      {
        veriTokenWeb(user.miToken)
        .then(res => {
          setContent({
            contenido: res.data.message
          })
          setCategoria({
            administrador: user.roles.includes("ROLE_ADMIN"),
            moderador: user.roles.includes("ROLE_MODERATOR"),
            usuario: user.roles.includes("ROLE_USER"),
            currentUser: user,
          });
        }, error => {
          setErrores({
            errores:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
          })
          authServices.logOut();
          alert("Error en la Autenticacion")
          window.location.reload();
        })
      }
    }
    verifyToken();
  }, []);

  const { administrador, moderador, usuario, currentUser } = categoria;

  return (
    <>
      <Router>
        <Menu administrador={administrador} moderador={moderador} usuario={usuario} currentUser={currentUser} logOut={authServices.logOut} contenido={content} errores={errores}/>
        <Switch>
          <RutaPublica exact path="/" component={Inicio} />
          <RutaPrivada exact path="/dashboard" component={Dashboard} />
          <RutaPrivada exact path="/administrador" component={Administrador} />
          <RutaPrivada exact path="/moderador" component={Moderador} />
          <RutaPrivada exact path="/usuario" component={Usuario}/>
          <RutaPrivada exact path="/profile" component={Profile} />
          <RutaPublica exact path="/login" component={Login} />
          <RutaPublica exact path="/register" component={Register} />
          <Redirect path="/**" to="/" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
