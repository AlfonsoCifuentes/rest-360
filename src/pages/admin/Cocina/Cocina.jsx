import React, { useState, useEffect } from "react";
import OrderItem from "../../../components/OrderItem/OrderItem";
import { Link } from "react-router-dom";
import OrderCardtem from "src/components/OrderCardItem/OrderCardItem";
import KitchenItem from "src/components/kitchenItem/kitchenItem"

import "./styles.scss";

const Cocina = () => {
  const [datosArray, setDatosArray] = useState([]);
  const [comandaDatos, setComandaDatos] = useState([]);
  const [comanda, setComanda] = useState();
  const [cocinaDato, setCocinaDatos] = useState([]);

  /* Estados de la cocina */

const [pedidosCocina, setPedidosCocina] = useState([]);
const [elaboracionCocina, setElaboracionCocina] = useState([]);
const [terminadosCocina, setTerminadosCocina] = useState([]);
const [servidoCocina, setServidosCocina] = useState([]);
const [ticketCocina, setTicketCocina] = useState([]);


  const handleSelectItem = (ev) => {
    setComanda(ev);
  };

  //Fetch de pdidos al servidor
  useEffect(() => {
    fetch("http://localhost:3001/api/articles")
      .then((response) => response.json())
      .then((data) => setCocinaDatos(data));
  }, []);

//   useEffect(() => {
//     // fetch(`http://localhost:3001/api/orderArticles/order/${comanda}`)
//     fetch(`http://localhost:3001/api/orderArticles/order/1`)
//       .then((response) => response.json())
//       .then((data) => setComandaDatos(data));
//   }, [comanda]);


  useEffect(() => {
    setPedidosCocina(cocinaDato.filter(plato => plato.category === "Entrante"))
    setElaboracionCocina(cocinaDato.filter(plato => plato.category === "Primeros"))
    setTerminadosCocina(cocinaDato.filter(plato => plato.category === "Segundos"))
    setServidosCocina(cocinaDato.filter(plato => plato.category === "Postres"))
    setTicketCocina(cocinaDato.filter(plato => plato.category === "Bebidas"))
  },[cocinaDato]);


  console.log("Vemos cocina")
  console.log(pedidosCocina)

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
            Cocina
          </h1>
        </div>

        <div className="detallePedidos">
          <div className="estadoItem">
            {pedidosCocina.map((pedidos) => (
              <div
                className="orderItemDiv__card"
                key={pedidos.id}
                // onClick={() => handleSelectItem(pedidos.id)}
              >
              <KitchenItem ordenId={pedidos} key={pedidos.id}/>

                
              </div>
            ))}
          </div>

          <div className="estadoItem">
            {elaboracionCocina.map((pedidos) => (
              <div
                className="orderItemDiv__card"
                key={pedidos.id}
                // onClick={() => handleSelectItem(pedidos.id)}
              >
              <KitchenItem ordenId={pedidos} key={pedidos.id}/>

                
              </div>
            ))}
          </div>

          <div className="estadoItem">
            {terminadosCocina.map((pedidos) => (
              <div
                className="orderItemDiv__card"
                key={pedidos.id}
                // onClick={() => handleSelectItem(pedidos.id)}
              >
              <KitchenItem ordenId={pedidos} key={pedidos.id}/>

                
              </div>
            ))}
          </div>

          <div className="orderDetailItem__card">


          {comandaDatos.length > 0 ? <OrderCardtem comandaId={comandaDatos} /> : <p>Seleccione un pedido para ver los datos</p>}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocina;
