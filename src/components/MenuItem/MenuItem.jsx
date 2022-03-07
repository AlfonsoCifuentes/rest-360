import React from "react";
import "./styles.scss";

const MenuItem = (props) => {
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
                src={require("../../images/icons/Aler_Gluten.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.egg ? (
              <img
                src={require("../../images/icons/Aler_Huevos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.fish ? (
              <img
                src={require("../../images/icons/Aler_Pescado.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.soja ? (
              <img
                src={require("../../images/icons/Aler_Soja.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.milk ? (
              <img
                src={require("../../images/icons/Aler_Lactosa.png")}
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
                src={require("../../images/icons/Aler_Mostaza.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.apio ? (
              <img
                src={require("../../images/icons/Aler_Celery.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.molusco ? (
              <img
                src={require("../../images/icons/Aler_Moluscos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.altramuces ? (
              <img
                src={require("../../images/icons/Aler_Cacahuetes.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.sesamo ? (
              <img
                src={require("../../images/icons/Aler_Gluten.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.sulfito ? (
              <img
                src={require("../../images/icons/Aler_Sulfitos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {props.cacahuete ? (
              <img
                src={require("../../images/icons/Aler_Cacahuetes.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            <div>
              <img className="alergenoIcon" src={require("../../images/icons/circuloMas.png")} alt="Añadir al pedido" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default MenuItem;
