import React from "react";
import { Nav, Navbar, NavItem } from "reactstrap";
import { Link } from "react-router-dom";

const Menu = (props) => {

  const {administrador, moderador, usuario, currentUser, logOut} = props;

  return (
    <Navbar color="light" expand="md" light>
      <Link to="/" className="navbar-brand">
        Sistema
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <Nav className="me-auto" navbar>
          <NavItem>
            <Link to="/" className="nav-link">
              Inicio
            </Link>
          </NavItem>

          {currentUser && (
            <NavItem>
              <Link to="/dashboard" className="nav-link">
                Dashboard
              </Link>
            </NavItem>
          )}

          {administrador && (
            <NavItem>
              <Link to="/administrador" className="nav-link">
                Administrador
              </Link>
            </NavItem>
          )}

          {moderador && (
            <NavItem>
              <Link to="/moderador" className="nav-link">
                Moderador
              </Link>
            </NavItem>
          )}

          {usuario && (
            <NavItem>
              <Link to="/usuario" className="nav-link">
                Usuario
              </Link>
            </NavItem>
          )}
        </Nav>

        {currentUser ? (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/profile" className="nav-link">
                {currentUser.usuario}
              </Link>
            </NavItem>

            <NavItem>
              <a href="/" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </NavItem>
          </Nav>
        ) : (
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/Login" className="nav-link">
                Login
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/register" className="nav-link">
                Registrarse
              </Link>
            </NavItem>
          </Nav>
        )}
      </div>
    </Navbar>
  );
};

export default Menu;
