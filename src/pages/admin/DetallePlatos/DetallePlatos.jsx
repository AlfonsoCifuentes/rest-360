import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useForm } from "../../../Hooks/useForm";

import "./DetallePlatos.scss";

const initialForm = {
  name: "",
  surnames: "",
  phone: "",
  email: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};

  if (!form.name.trim()) {
    errors.name = "El 'Nombre' es requerido";
  }

  if (!form.phone.trim()) {
    errors.phone = "El 'Teléfono' es requerido";
  }

  if (!form.email.trim()) {
    errors.email = "El 'Email' es requerido";
  }

  if (!form.comments.trim()) {
    errors.comments = "El 'Comentario' es requerido";
  }

  if (!form.privacy) {
    errors.privacy = "Debe aceptar la política de privacicad";
  }

  return errors;
};

const DetallePlatos = () => {
  const {
    form,
    errors,
    formOK,
    isChecked,
    handleCheck,
    handleChange,
    handleSubmit,
  } = useForm(initialForm, validationsForm);

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  const { id } = useParams();

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
              <img
                src={require("../../../images/icons/ico_flechaizquierda.png")}
                alt="Volver al listado de tickets"
                className="arrowIcon"
              />
            </Link>
            Platos {id}
          </h1>
        </div>

        <div className="detallePlato">
          <div className="detallePlato__img">
            <img
              className="imgPlate"
              src={datosArray.image}
              alt={datosArray.name}
            />
          </div>

          <div className="detallePlato_card">
            <form onSubmit={handleSubmit}>
              <div className="div__datos">
                <p>Datos de contacto:</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Nombre *"
                  onChange={handleChange}
                  value={form.name}
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <input
                  type="text"
                  name="surnames"
                  placeholder="Apellidos"
                  onChange={handleChange}
                  value={form.surnames}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Telefono *"
                  onChange={handleChange}
                  value={form.phone}
                />
                {errors.phone && <p className="error">{errors.phone}</p>}

                <input
                  type="email"
                  name="email"
                  placeholder="Escribe tu email *"
                  onChange={handleChange}
                  value={form.email}
                />
                {errors.email && <p className="error">{errors.email}</p>}

                <textarea
                  name="comments"
                  cols="50"
                  rows="5"
                  placeholder="¿En qué podemos ayudarte? Coméntanos..."
                  onChange={handleChange}
                  value={form.comments}
                />
                {errors.comments && <p className="error">{errors.comments}</p>}

                <label>
                  <input
                    type="checkbox"
                    name="privacy"
                    value={!isChecked ? "ok" : ""}
                    checked={isChecked}
                    onChange={handleCheck}
                  />
                  Acepto Políticas de Privacidad.
                </label>
                {errors.privacy && <p className="error">{errors.privacy}</p>}
                <div className="vSpace"></div>

                <input type="submit" value="Enviar" />
              </div>
            </form>

            {datosArray.name}

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
    </div>
  );
};

export default DetallePlatos;
