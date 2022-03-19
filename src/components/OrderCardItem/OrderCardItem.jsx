import React, { useState, useEffect } from "react";

import "./styles.scss";
// import { CartContext } from "../CartContext/CartContext"
// import { AccordionIcon } from "@chakra-ui/accordion";

const OrderCardtem = (props) => {
  const [orderId, setOrderId] = useState([]);
 
  const comanda = props.escroto;
  console.log("comanda hijo");
  console.log(comanda);

  useEffect(() => {
    fetch(`http://localhost:3001/vga/orders/${comanda}`)
      .then((response) => response.json())
      .then((data) => setOrderId(data));
    // console.log("Datos pedido Order");
    // console.log(setOrderId);

  }, [comanda]);
  
  // useEffect(() => {
  //   fetch(`http://localhost:3001/vga/orderArticles/order/${comanda}`)
  //     .then((response) => response.json())
  //     .then((data) => setComandaDatos(data));
  //   console.log("Datos comanda Order");
  //   console.log(setComandaDatos);
  // }, [comanda]);

  return (
    <div className="ItemDiv">
      <div className="orderCardDiv">
        <div className="orderCardDiv__card">
          <table className="rwd-table sinborde">
            <tbody>
              <tr key={orderId.id}>
                <td colSpan="3" className="div__table__left">
                  <h1 className="orderCardDiv__card__title">
                    Detalle del pedido
                  </h1>
                </td>
                <td rowSpan="2" className="div__table__center">
                  <img
                    className="controlIcon"
                    src={require("../../images/icons/flechaIcon.png")}
                    alt="Añadir al pedido"
                  />
                </td>
              </tr>
              <tr>
                <td className="div__table__center">
                  Pedido: {orderId.idOrder} / {orderId.idDestino}
                  <br />
                  {orderId.day}
                </td>
                <td className="div__table__center">
                  {orderId.numPerson}
                  <img
                    className="controlIcon"
                    src={require("../../images/icons/ico_reserv_personas.png")}
                    alt="Añadir al pedido"
                  />
                </td>
                <td className="div__table__right">{orderId.pvp} €.</td>
              </tr>
            </tbody>
          </table>

          <table className="rwd-table">
            <thead>
              <tr>
                <th>Estado</th>
                <th>Producto</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {comanda.map((item) => (
                <tr key={item.id}>
                  <td className="div__table__center">{item.estado}</td>
                  <td className="div__table__center">{item.idArticle}</td>
                  <td className="div__table__center">{item.idUser}</td>
                  <td className="div__table__center">{item.costNeto}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className=""></p>
        </div>
      </div>
    </div>
  );
};

export default OrderCardtem;
