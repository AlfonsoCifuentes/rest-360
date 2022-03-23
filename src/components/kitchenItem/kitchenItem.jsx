import { type } from "@testing-library/user-event/dist/type";
import React, { useContext, useState } from "react";
// import { CartContext } from "../CartContext/CartContext";

import "./styles.scss";

const kitchenItem = (props) => {
  const lineaPedido = props.ordenId;

  //   const {cartItems, setCartItems} = useContext(CartContext)
  //   const [valor, setValor] = useState(0);

  //Función para que quite el item actual de la lista
  //   const handleRemoveItem = (nombre) => {
  //     let index = cartItems.findIndex(i => i.name === nombre)
  //     if (index > -1){
  //       cartItems.splice(index, 1)
  //       setCartItems(cartItems => [...cartItems]) //Para forzar el re render
  //     }
  //   }

  //  //Función para añadir el item actual a la lista
  // const handleAddItem = (articulo) => {
  //   setCartItems(articulo)
  // }

  // const contador = funcionContador();

  return (
    <div className="ItemDiv">
      <div className={props.style}>
        <div className="kitchenItemDiv__card">
          <div className="kitchenItemDiv__card__title">
            <h1>{lineaPedido.name}</h1>
          </div>
        </div>

        <div className="kitchenItemDiv__card__datos">
          <div className="kitchenItemDiv__card__datos__image">
            <div className="kitchenItemDiv__card__datos__image__roundDiv">
              <img
                className="roundImage"
                src={lineaPedido.image}
                alt={lineaPedido.name}
              />
            </div>
          </div>

          <div>
            <div className="kitchenItemDiv__card__titleandtime__divTime">
              <h1 className="kitchenItemDiv__card__titleandtime__divTime__time">
                {lineaPedido.timeCook} min.
              </h1>

              <div className="kitchenItemDiv__card__botones">
                <div className="addItem">
                  {props.type === "pedidos" ? (
                    <img
                      className="kitchenItemIconAdelante"
                      src={require("../../images/icons/ico_flechaderecha.png")}
                      alt="Borrar del pedido"
                      // onClick={() => handleRemoveItem(props.name)}
                    />
                  ) : (
                    ""
                  )}

                  {props.type === "elaboracion" ? (
                    <>
                      <img
                        className="kitchenItemIconAtras"
                        src={require("../../images/icons/ico_flechaizquierda_negra.png")}
                        alt="Añadir al pedido"
                        // onClick={() => handleAddItem(props.carta)}
                      />
                      <img
                        className="kitchenItemIconAdelante"
                        src={require("../../images/icons/ico_flechaderecha_roja.png")}
                        alt="Borrar del pedido"
                        // onClick={() => handleRemoveItem(props.name)}
                      />
                    </>
                  ) : (
                    ""
                  )}

                  {props.type === "terminado" ? (
                    <>
                      <img
                        className="kitchenItemIconAtras"
                        src={require("../../images/icons/ico_flechaizquierda_negra.png")}
                        alt="Añadir al pedido"
                        // onClick={() => handleAddItem(props.carta)}
                      />
                      <img
                        className="kitchenItemIconAdelante"
                        src={require("../../images/icons/ico_flechaderecha_verde.png")}
                        alt="Borrar del pedido"
                        // onClick={() => handleRemoveItem(props.name)}
                      />
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default kitchenItem;
