import React, { useContext } from "react";
import "./styles.scss";
import { CartContext } from "../CartContext/CartContext"


const MenuItem = (props) => {

  const {cartItems, setCartItems} = useContext(CartContext)

  return (
    <div className="ItemDiv">
      <div className="menuItemDiv">
        <div className="menuItemDiv__card">
          <div className="menuItemDiv__card__image">
            <div className="roundDiv">
              <img
                className="roundImage"
                src={props.image}
                alt={props.product}
              />
            </div>
          </div>

          <div className="menuItemDiv__card__titleandprice">
            <div className="menuItemDiv__card__titleandprice__divTitle">
              <h1 className="menuItemDiv__card__titleandprice__divTitle__title">
                {props.product}
              </h1>
            </div>
            <div className="menuItemDiv__card__titleandprice__divPrice">
              <p className="menuItemDiv__card__titleandprice__divPrice__price">
                <strong>{props.pvp}€</strong>
              </p>
            </div>
          </div>


        </div>
        <div className="menuItemDiv__card__alergenos">
            {props.gluten ? (
              <img
                src={require("../../images/icons/ico_alerg_gluten.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.egg ? (
              <img
                src={require("../../images/icons/ico_alerg_huevos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.fish ? (
              <img
                src={require("../../images/icons/ico_alerg_pescado.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.soja ? (
              <img
                src={require("../../images/icons/ico_alerg_soja.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.milk ? (
              <img
                src={require("../../images/icons/ico_alerg_lactosa.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.fructose ? (
              <img
                src={require("../../images/icons/Aler_Azucar.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.mustard ? (
              <img
                src={require("../../images/icons/ico_alerg_mostaza.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.apio ? (
              <img
                src={require("../../images/icons/ico_alerg_apio.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.molusco ? (
              <img
                src={require("../../images/icons/ico_alerg_moluscos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.altramuces ? (
              <img
                src={require("../../images/icons/ico_alerg_altramuces.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.sesamo ? (
              <img
                src={require("../../images/icons/ico_alerg_sesamo.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.sulfito ? (
              <img
                src={require("../../images/icons/ico_alerg_sulfitos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.cacahuete ? (
              <img
                src={require("../../images/icons/ico_alerg_cacahuetes.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            <div className="addItem">
              <img className="controlIcon" src={require("../../images/icons/circuloMas.png")} alt="Añadir al pedido" onClick={() => setCartItems(props.carta)}/>
            </div>
          </div>
      </div>
    </div>
  );
};

export default MenuItem;
