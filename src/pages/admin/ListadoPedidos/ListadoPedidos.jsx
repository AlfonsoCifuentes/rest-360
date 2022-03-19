import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoPedidos = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/vga/orders")
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
            Listado de Pedidos</h1>
      </div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Pedido</th>
              <th>Mesa</th>
              <th>Usuario</th>
              <th>Comensales</th>
              <th>Importe</th>
              <th>IVA</th>
              <th>P.V.P.</th>
              <th>Estado</th>
              <th>Dia / Hora</th>
              <th>Ver detalle</th>
            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td className="div__table__center">{item.idOrder}</td>
                <td className="div__table__center">{item.idDestino}</td>
                <td className="div__table__center">{item.idUser}</td>
                <td className="div__table__center">{item.numPerson}</td>
                <td className="div__table__right">{item.costNeto}</td>
                <td className="div__table__right">{item.iva}</td>
                <td className="div__table__right">{item.pvp}</td>
                <td className="div__table__right">{item.estado}</td>
                <td className="div__table__right">{item.day}</td>
                <td data-th="Ver detalle:" className="div__table__center"><img className="controlIcon" src={require("../../../images/icons/flechaIcon.png")} alt="Añadir al pedido" /></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoPedidos;
