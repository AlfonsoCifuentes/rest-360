import React from "react";
// import React, { useContext } from "react";

import "./styles.scss";
// import { CartContext } from "../CartContext/CartContext"
// import { AccordionIcon } from "@chakra-ui/accordion";



const Ordertem = (props) => {
  const pedidos = props.potorro;

  // const handleSelectItem = (ev) => { 

  //   console.log("pulsamos en pedido");
  //   console.log(ev);

  // }

  return (
    <div className="ItemDiv">
      <div className="orderItemDiv">
        <div className="orderItemDiv__card" key={pedidos.id} >
          <h1 className="orderItemDiv__card__title">
            Pedido: {pedidos.idOrder} / {pedidos.idDestino}
          </h1>

            <p className="">
              {pedidos.numPerson}{" "}
              <img
                className="comensalesIcon"
                src={require("../../images/icons/ico_reserv_personas.png")}
                alt="Borrar del pedido"
              />{" "}
              {pedidos.pvp} €.
            </p>
          
        </div>

      </div>
    </div>
  );
};

export default Ordertem;
