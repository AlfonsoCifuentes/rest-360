import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoRegalos = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/vga/bookingGift")
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
            Listado de Regalos</h1>
      </div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Nº</th>
              <th>Regalo</th>
              <th>Pax</th>
              <th>Precio</th>
              <th>Codigo Secreto</th>
              <th>Fecha Compra</th>
              <th>Fecha Consumo</th>
              <th>Validado</th>
            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td className="div__table__center">{item.idGift}</td>
                <td className="div__table__center">{item.typeGift}</td>
                <td className="div__table__center">{item.numPersonas}</td>
                <td className="div__table__center">{item.cost}</td>
                <td className="div__table__center">{item.codigo}</td>
                <td className="div__table__center">{item.dateBuy}</td>
                <td className="div__table__right">{item.dateConsume}</td>
                <td className="div__table__center">{item.valid ? <img src={require("../../../images/icons/ico_ok.png")} alt="Alergias" className="reservasIcon"/>:<p></p>}</td>

              </tr>
            ))}
          </tbody>
        </table>
        <div>
        <img src={require("../../../images/icons/ico_ok.png")} alt="Alergias" className="reservasIcon"/>Bono regalo canjeado correctamente
        </div>
      </div>
    </div>
  );
};

export default ListadoRegalos;
