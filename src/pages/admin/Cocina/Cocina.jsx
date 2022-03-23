import React, { useState, useEffect } from "react";
import OrderItem from "../../../components/OrderItem/OrderItem";
import { Link } from "react-router-dom";
import OrderCardtem from "src/components/OrderCardItem/OrderCardItem";
import KitchenItem from "src/components/kitchenItem/kitchenItem";

import "./styles.scss";

const Cocina = () => {
  const [datosArray, setDatosArray] = useState([]);
  const [comandaDatos, setComandaDatos] = useState([]);
  const [comanda, setComanda] = useState();
  const [cocinaDatos, setCocinaDatos] = useState([]);

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

      console.log(cocinaDatos)
  }, []);

  //   useEffect(() => {
  //     // fetch(`http://localhost:3001/api/orderArticles/order/${comanda}`)
  //     fetch(`http://localhost:3001/api/orderArticles/order/1`)
  //       .then((response) => response.json())
  //       .then((data) => setComandaDatos(data));
  //   }, [comanda]);

  useEffect(() => {
    setPedidosCocina(
      cocinaDatos.filter((plato) => plato.category === "Entrante")
    );
    setElaboracionCocina(
      cocinaDatos.filter((plato) => plato.category === "Primeros")
    );
    setTerminadosCocina(
      cocinaDatos.filter((plato) => plato.category === "Segundos")
    );
    setServidosCocina(
      cocinaDatos.filter((plato) => plato.category === "Postres")
    );
    setTicketCocina(cocinaDatos.filter((plato) => plato.category === "Bebidas"));
  }, [cocinaDatos]);

  console.log("Vemos cocina");
  console.log(pedidosCocina);

  return (
    <div className="mainDiv">
      <div className="sectionParagraph_cocina">
        <div className="titleAdmin_cocina">
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
            <h1>Pedidos ({pedidosCocina.length})</h1>
            {pedidosCocina.map((pedidos) => (
              <div
                className="estadoItemDiv__card"
                key={pedidos.id}
                // onClick={() => handleSelectItem(pedidos.id)}
              >
                <KitchenItem
                  ordenId={pedidos}
                  key={pedidos.id}
                  style={"kitchenItemDiv"}
                  type={"pedidos"}
                />
              </div>
            ))}
          </div>

          <div className="estadoItem">
            <h1>Elaboración ({elaboracionCocina.length})</h1>
            {elaboracionCocina.map((pedidos) => (
              <div
                className="estadoItemDiv__card"
                key={pedidos.id}
                // onClick={() => handleSelectItem(pedidos.id)}
              >
                <KitchenItem
                  ordenId={pedidos}
                  key={pedidos.id}
                  style={"kitchenItemDiv red"}
                  type={"elaboracion"}
                />
              </div>
            ))}
          </div>

          <div className="estadoItem">
            <h1>Terminados ({terminadosCocina.length})</h1>
            {terminadosCocina.map((pedidos) => (
              <div
                className="estadoItemDiv__card"
                key={pedidos.id}
                // onClick={() => handleSelectItem(pedidos.id)}
              >
                <KitchenItem
                  ordenId={pedidos}
                  key={pedidos.id}
                  style={"kitchenItemDiv green"}
                  type={"terminado"}
                />
              </div>
            ))}
          </div>

          <div className="kitchenDetailItem__card">
          <div className="kitchenDetailItem__card">
            <div >
              <h1>Servidos</h1>
                <div className="kitchenDetailItem__card__azul"><h1 className="textH1">{servidoCocina.length}</h1></div>

            </div>

            <div >
              <h1>Ticket</h1>
              <div className="kitchenDetailItem__card__naranja"><h1 className="textH1">{ticketCocina.length}</h1></div>

            </div>

          </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Cocina;
