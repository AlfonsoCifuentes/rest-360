import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute = ({usuario, component, ...restProps }) => {
  if (!component) throw new Error('Necesitas añadir una prop "component" con el siguiente formato <MiComoponente props />');

  if (usuario) return component;

  if (!usuario) return <Navigate to="/login" state={{prevRoute: window.location.pathname}} />
};

export default AuthRoute;