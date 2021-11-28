// import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Profile from "./views/Profile";
import Inicio from "./views/Inicio";
import Login from "./views/Login";
import Register from "./views/Register";
import Administrador from "./views/Administrador";
import Moderador from "./views/Moderador";
import Usuarios from "./views/Usuario";
import { useEffect, useState } from "react";
import RutaPrivada from "./components/RutaPrivada";
import Menu from './components/Menu';

function App() {
  const [categoria, setCategoria] = useState({
    administrador: false,
    moderador: false,
    usuario: false,
    currentUser: undefined,
  });

  const logOut = () => {
    alert('Cerrado')
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setCategoria({
        administrador: user.roles.includes("ROLE_ADMIN"),
        moderador: user.roles.includes("ROLE_MODERATOR"),
        usuario: user.roles.includes("ROLE_USER"),
        currentUser: user,
      });
    }
  }, []);

  const { administrador, moderador, usuario, currentUser } = categoria;

  return (
    <>
      <Router>
        <Menu administrador={administrador} moderador={moderador} usuario={usuario} currentUser={currentUser} logOut={logOut}/>
        <Switch>
          <Route exact path="/react-login" component={Inicio} />
          <RutaPrivada path="/dashboard" component={Dashboard} />
          <RutaPrivada path="/administrador" component={Administrador} />
          <RutaPrivada path="/moderador" component={Moderador} />
          <RutaPrivada path="/usuario" component={Usuarios}/>
          <RutaPrivada path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
