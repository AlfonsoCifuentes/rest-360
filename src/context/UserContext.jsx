import React, { useState, useEffect } from "react";
import axios from "axios";

export const UserContext = React.createContext({});

export const UserProvider = ({children}) => {


  const [usuario, setUsuario] = useState(null);
  const [usuarios, setListaUsuarios] = useState([]);

  const user = {
      usuario,
      setUsuario
  }


  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

