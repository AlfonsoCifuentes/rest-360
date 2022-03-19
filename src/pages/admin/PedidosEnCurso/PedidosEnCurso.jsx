import React, { useState, useEffect } from "react";
import OrderItem from "../../../components/OrderItem/OrderItem";
import { Link } from "react-router-dom";
import OrderCardtem from "src/components/OrderCardItem/OrderCardItem";

import "./styles.scss";

const PedidosEnCurso = () => {
  const [datosArray, setDatosArray] = useState([]);
  const [orderId, setOrderId] = useState([]);
  const [comandaDatos, setComandaDatos] = useState([]);
  const [comanda, setComanda] = useState();

  const handleSelectItem = (ev) => {
    setOrderId(ev);
    setComanda(ev);

  };

  //Fetch de pdidos al servidor
  useEffect(() => {
    fetch("http://localhost:3001/vga/orders")
      .then((response) => response.json())
      .then((data) => setDatosArray(data));
  }, []);


  useEffect(() => {
    fetch(`http://localhost:3001/vga/orderArticles/order/${comanda}`)
      .then((response) => response.json())
      .then((data) => setComandaDatos(data));
  }, [comanda]);



  return (
    <div className="mainDiv">
      <div className="sectionParagraph">
        <div className="titleAdmin">
          <h1 className="title">
            <Link to="/admmain">
              <img
                src={require("../../../images/icons/ico_flechaizquierda.png")}
                alt="Volver al menú de administración"
                className="arrowIcon"
              />
            </Link>
            Pedidos
          </h1>
        </div>

        <div className="detallePedidos">

          <div className="orderItem">
            {datosArray.map((pedidos) => (
              <div
                className="orderItemDiv__card"
                key={pedidos.id}
                onClick={() => handleSelectItem(pedidos.id)}
              >
                <OrderItem potorro={pedidos} key={pedidos.id} />

              </div>
            ))}
          </div>

          <div className="orderDetailItem__card">
            <OrderCardtem escroto={comandaDatos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosEnCurso;
