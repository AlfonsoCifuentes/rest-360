import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";

import "./styles.scss";

const kitchenItem = (props) => {
  const lineaPpedido = props.ordenId;

  console.log("Vemos KitchenItem");
  console.log(lineaPpedido);

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
      <div className="kitchenItemDiv">
        <div className="kitchenItemDiv__card">
          <div className="kitchenItemDiv__card__title">
            <h1>{lineaPpedido.name}</h1>
          </div>
        </div>

        <div className="kitchenItemDiv__card__datos">
          <div className="kitchenItemDiv__card__datos__image">
            <div className="kitchenItemDiv__card__datos__image__roundDiv">
              <img
                className="roundImage"
                src={lineaPpedido.image}
                alt={lineaPpedido.name}
              />
            </div>
          </div>

          <div>
            <div className="kitchenItemDiv__card__titleandtime__divTime">
              <h1 className="kitchenItemDiv__card__titleandtime__divTime__time">
                {lineaPpedido.timeCook} min.
              </h1>

              <div className="kitchenItemDiv__card__botones">

                <div className="addItem">
                  <img
                    className="kitchenItemIcon"
                    src={require("../../images/icons/ico_flechaizquierda.png")}
                    alt="Añadir al pedido"
                    // onClick={() => handleAddItem(props.carta)}
                  />
                  <img
                    className="kitchenItemIcon"
                    src={require("../../images/icons/ico_flechaderecha.png")}
                    alt="Borrar del pedido"
                    // onClick={() => handleRemoveItem(props.name)}
                  />
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
