import React, { useState, useEffect } from "react";

const Tickets = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
//   useEffect(() => {
//     fetch("http://localhost:3001/vga/bill") //Cambiar a bill cuando tenga datos.
//       .then((response) => response.json())
//       .then((data) => setDatosArray(data));
//   }, []);

  console.log(setDatosArray);

  return (
    <div className="mainDiv">
      <h1 className="title">Tickets</h1>
      <div className="sectionParagraph">
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Ticket</th>
              <th>Mesa</th>
              <th>Pedido</th>
              <th>Comensales</th>
              <th>Importe</th>
              <th>IVA</th>
              <th>P.V.P.</th>
              <th>Pagado</th>
              <th>Ver detalle</th>
            </tr>
          </thead>
          <tbody>
            {/* {datosArray.map((item) => (
              <tr key={item.id}>
                <td data-th="Ticket:" className="div__table__center"><span>{item.idTicket}</span></td>
                <td data-th="Mesa:" className="div__table__center"><span>{item.idDestino}</span></td>
                <td data-th="Orden:" className="div__table__center"><span>{item.idOrder}</span></td>
                <td data-th="Comensales:" className="div__table__center"><span>{item.comensales}</span></td>
                <td data-th="Importe:" className="div__table__right"><span>{item.cost}</span></td>
                <td data-th="IVA:" className="div__table__right"><span>{item.iva}</span></td>
                <td data-th="P.V.P.:" className="div__table__right"><span>{item.pvp}</span></td>
                <td data-th="Pagado:" className="div__table__right"><span>{item.pagado}</span></td>
                <td data-th="Ver detalle:" className="div__table__center"><img className="controlIcon" src={require("../../../images/icons/flechaIcon.png")} alt="Añadir al pedido" /></td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tickets;
