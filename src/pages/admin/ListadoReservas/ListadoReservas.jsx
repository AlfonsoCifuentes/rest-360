import React, { useState, useEffect } from "react";

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
      <h1 className="title">Listado de Reservas</h1>
      <div className="sectionParagraph">
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Reserva</th>
              <th>Dia</th>
              <th>Hora</th>
              <th>Comensales</th>
              <th>Nombre y Apellido</th>
              <th>Teléfono</th>
              <th>Email</th>
              <th>Alergias</th>
              <th>Solicitud</th>
              <th>Ofertas</th>
              <th>Confirmacion</th>
            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td className="div__table__center">{item.idReserva}</td>
                <td className="div__table__center">{item.date}</td>
                <td className="div__table__center">{item.hour}</td>
                <td className="div__table__center">{item.numPerson}</td>
                <td className="div__table__right">{item.name} {item.name}</td>
                <td className="div__table__right">{item.phone}</td>
                <td className="div__table__right">{item.email}</td>
                <td className="div__table__right">{item.allergic}</td>
                <td className="div__table__right">{item.text}</td>
                <td className="div__table__right">{item.ofertas}</td>
                <td className="div__table__right">{item.confirmacion}</td>


                {item.confirmacion ? (
              <img
                src={require("../../images/icons/ico_alerg_pescado.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}

                {/* <td data-th="confirmacion:" className="div__table__center"><img className="controlIcon" src={require("../../../images/icons/flechaIcon.png")} alt="Añadir al pedido" /></td> */}
              </tr>
            ))}



          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoReservas;
