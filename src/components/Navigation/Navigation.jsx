import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Navigation = () => {
  return (
    <nav role="navigation" className="nav">
      <div id="menuToggle">
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul id="menu">
          <Link to="/">
            <li>INICIO</li>
          </Link>
          <Link to="/restaurante">
            <li>RESTAURANTE</li>
          </Link>
          <Link to="/carta-pedidos">
            <li>CARTA/PEDIDOS</li>
          </Link>
          <Link to="/reservas">
            <li>RESERVAS</li>
          </Link>
          <Link to="/socios">
            <li>SOCIOS</li>
          </Link>
          <Link to="/contacto">
            <li>CONTACTO</li>
          </Link>
        </ul>
      </div>

      <div className="nav__background">
        <Link to="/">
          <img
            className="nav__logo"
            src={require("../../images/icons/Logo360Blanco.png")}
            alt="Logo"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
