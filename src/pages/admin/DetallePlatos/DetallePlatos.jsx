import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import "./DetallePlatos.scss"

const DetallePlatos = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    fetch("http://localhost:3001/api/articles/1")
      .then((response) => response.json())
      .then((data) => setDatosArray(data));
  }, []);

  console.log(setDatosArray);

  return (
    <div className="mainDiv">
      <div className="sectionParagraph">
        <div className="titleAdmin">
                <h1 className="title">
                <Link to="/listadotickets">
                <img src={require("../../../images/icons/ico_flechaizquierda.png")} alt="Volver al listado de tickets" className="arrowIcon"/>
                </Link>
                Platos {id}</h1>
        </div>

        <div className="detallePlato_img">
              <div className="imgPlato__card">
              <img
                className="imgPlate"
                src={datosArray.image}
                alt={datosArray.name}
              />
              </div>
        </div>

        <div className="detallePlato_card">

          <h1 className="menuItemDiv__card__titleandprice__divTitle__title">
                {datosArray.name}
              </h1>
              <p className="menuItemDiv__card__titleandprice__divPrice__price">
                <strong>{datosArray.pvp}€</strong>
              </p>

              <div className="menuItemDiv__card__alergenos">
            {datosArray.hasGluten ? (
              <img
                src={require("../../../images/icons/ico_alerg_gluten.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasEgg ? (
              <img
                src={require("../../../images/icons/ico_alerg_huevos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasFish ? (
              <img
                src={require("../../../images/icons/ico_alerg_pescado.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasSoja ? (
              <img
                src={require("../../../images/icons/ico_alerg_soja.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasMilk ? (
              <img
                src={require("../../../images/icons/ico_alerg_lactosa.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasFructose ? (
              <img
                src={require("../../../images/icons/Aler_Azucar.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasMustard ? (
              <img
                src={require("../../../images/icons/ico_alerg_mostaza.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasApio ? (
              <img
                src={require("../../../images/icons/ico_alerg_apio.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasMolusco ? (
              <img
                src={require("../../../images/icons/ico_alerg_moluscos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasAltramuces ? (
              <img
                src={require("../../../images/icons/ico_alerg_altramuces.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasSesamo ? (
              <img
                src={require("../../../images/icons/ico_alerg_sesamo.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasSulfito ? (
              <img
                src={require("../../../images/icons/ico_alerg_sulfitos.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            {datosArray.hasCacahuete ? (
              <img
                src={require("../../../images/icons/ico_alerg_cacahuetes.png")}
                alt="Gluten"
                className="alergenoIcon"
              />
            ) : (
              <p></p>
            )}
            
          </div>



          </div>

      </div>


    </div>
  );
};

export default DetallePlatos;
