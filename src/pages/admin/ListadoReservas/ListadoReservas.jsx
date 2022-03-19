import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoReservas = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/vga/booking")
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
            Listado de Reservas</h1>
      </div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Nº</th>
              <th>Dia</th>
              <th>Hora</th>
              <th>Pax</th>
              <th>Nombre y Apellido</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Alergias</th>
              <th>Solicitud</th>
              <th>Ofertas</th>
              <th>Confirm.</th>
            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td className="div__table__center">{item.idReserva}</td>
                <td className="div__table__center">{item.date}</td>
                <td className="div__table__center">{item.hour}</td>
                <td className="div__table__center">{item.numPerson}</td>
                <td className="div__table__right">{item.name} {item.lastName}</td>
                <td className="div__table__center">{item.phone}</td>
                <td className="div__table__center">{item.email}</td>
                <td className="div__table__right">{item.allergic ? <img src={require("../../../images/icons/ico_punto_rojo.png")} alt="Alergias" className="reservasIcon"/>:<p></p>}{item.allergic}</td>
                <td className="div__table__right">{item.text}</td>
                <td className="div__table__center">{item.ofertas ? <img src={require("../../../images/icons/ico_punto_naranja.png")} alt="Alergias" className="reservasIcon"/>:<p></p>}</td>
                <td className="div__table__center">{item.confirmacion ? <img src={require("../../../images/icons/ico_punto_verde.png")} alt="Alergias" className="reservasIcon"/>:<p></p>}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
        <img src={require("../../../images/icons/ico_punto_rojo.png")} alt="Alergias" className="reservasIcon"/>Atención Alergias /
        <img src={require("../../../images/icons/ico_punto_naranja.png")} alt="Alergias" className="reservasIcon"/>Reserva con Oferta /
        <img src={require("../../../images/icons/ico_punto_verde.png")} alt="Alergias" className="reservasIcon"/>Reserva Confirmada
        </div>
      </div>
    </div>
  );
};

export default ListadoReservas;
