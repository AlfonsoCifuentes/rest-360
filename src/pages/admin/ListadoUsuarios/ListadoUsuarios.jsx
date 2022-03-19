import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoUsuarios = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/vga/users") //Cambiar a bill cuando tenga datos.
      .then((response) => response.json())
      .then((data) => setDatosArray(data));
  }, []);

  console.log(setDatosArray);

  return (
    <div className="mainDiv">
      <div className="sectionParagraph">
      <div className="titleAdmin">
            <h1 className="title">
            <Link to="/admmain">
            <img src={require("../../../images/icons/ico_flechaizquierda.png")} alt="Volver al menú de administración" className="arrowIcon"/>
            </Link>
            Listado de Usuarios</h1>
      </div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>Nombre y Apellido</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Cumpleaños</th>

            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td data-th="Ticket:" className="div__table__center"><span>{item.userName}</span></td>
                <td data-th="Mesa:" className="div__table__center"><span>{item.firstName} {item.lastName}</span></td>
                <td data-th="Orden:" className="div__table__center"><span>{item.phone}</span></td>
                <td data-th="Comensales:" className="div__table__center"><span>{item.email}</span></td>
                <td data-th="Importe:" className="div__table__right"><span>{item.dateOfBirth}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoUsuarios;
