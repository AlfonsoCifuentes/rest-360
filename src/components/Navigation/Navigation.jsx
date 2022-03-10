import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";
import { CartContext } from "../CartContext/CartContext";

const Navigation = () => {


  const {cartItems}  = useContext(CartContext);
 
  

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

        <div className="nav__background__logoCart">
        <h1 className="white">CUENTA:{cartItems.length}cosas</h1>
        <img className="nav__background__logoCart__bandeja" src={require("../../images/icons/IconoBandeja.png")} alt="Su pedido" />
          


        <Link to="/">
          <img
            className="nav__logo"
            src={require("../../images/icons/Logo360Blanco.png")}
            alt="Logo"
          />
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
