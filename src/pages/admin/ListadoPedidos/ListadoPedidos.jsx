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
              <th>PAX</th>
              <th>Importe</th>
              <th>IVA</th>
              <th>PVP</th>
              <th>Estado</th>
              <th>Dia/Hora</th>
              <th>Ver detalle</th>
            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td data-th="Pedido:" className="div__table__center">{item.idOrder}</td>
                <td data-th="Mesa:" className="div__table__center">{item.idDestino}</td>
                <td data-th="Usuario:" className="div__table__center">{item.idUser}</td>
                <td data-th="PAX:" className="div__table__center">{item.numPerson}</td>
                <td data-th="Importe:" className="div__table__right">{item.costNeto}</td>
                <td data-th="IVA:" className="div__table__right">{item.iva}</td>
                <td data-th="PVP:" className="div__table__right">{item.pvp}</td>
                <td data-th="Estado:" className="div__table__center">{item.estado ? (<><img src={require("../../../images/icons/ico_punto_verde.png")} alt="Usuario Administrador" className="reservasIcon"/>Cerrado</>):('Pendiente')}</td>
                <td data-th="Dia/Hora:" className="div__table__right">{item.day}</td>
                <td data-th="Ver detalle:" className="div__table__center"><p className="spaceMovile"><img className="tableDetIcon" src={require("../../../images/icons/flechaIcon.png")} alt="Añadir al pedido" /></p></td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoPedidos;
