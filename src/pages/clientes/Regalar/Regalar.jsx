import React from "react";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";

import { useEffect, useState } from "react";
import { useForm } from "../../../Hooks/useForm";

import { v4 as uuidv4 } from "uuid";

import "./styles.scss";

const initialForm = {
  diners: "",
  gift: "",
  code: "",
};

const validationsForm = (form) => {
  let errors = {};

  if (!form.gift.trim()) {
    errors.gift = "Debe seleccionar un menú";
  }

  if (!form.diners.trim()) {
    errors.diners = "El 'Número de Personas' es requerido";
  }

  return errors;
};

const Regalar = () => {
  const [message, setMessage] = useState("");
  const { form, errors, formOK, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );


  const  codigoRandom = () => {
    // const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    // Obtenemos un codigo random, en base a 36 caracteres (abecedario + nunmeros) y con una largura de 6 (8-2).
    let codigo= Math.random().toString(36).substring(2,8);       
    return codigo;
}

console.log(codigoRandom());

  useEffect(() => {
    if (formOK) {
      guardadoDatos();
      console.log("listos para guardar datos")

      
    } else {
      return;
    }
  }, [formOK]);

  let guardadoDatos = async (e) => {
    try {
      let response = await fetch("http://localhost:3001/api/bookingGift/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: 1,
          codigo: '542',
          typeGift: 'menu',
          numPerson: 5,
          cost: 12,
          dateBuy: Date.now(),


          // id: uuidv4(),
          // codigo: codigoRandom(),
          // typeGift: form.hour,
          // numPerson: form.diners,
          // cost: form.name,
          // dateBuy: Date.now()
        }),
      });
      let responseJson = await response.json();
      if (response.status === 200) {
        setMessage("Usuario creado con éxito");
        //initialForm()

        // setTimeout(() => {
        //   goToLogin()
        // }, 750)
      } else {
        setMessage("Ha habido un error");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/a0/dd/L5y1hFtA_o.jpg";

  return (
    <>
      <div className="mainDiv">
        <StandardHeader bgImage={bgImage} />
        <h1 className="title">Regala 360º</h1>
        {!formOK ? (
          // Si el formulario no esta OK.
          <form onSubmit={handleSubmit}>
            <div className="menuForm">
              <div className="menuForm__card">
                <h1>Menú degustación</h1>
                <h3>PVP: 70€</h3>
                <hr />
                <h4>6 pases / 1 bebida incluida</h4>
                <p>
                  La elección del menú degustación es la elección por una
                  experiencia gastronómica completa
                </p>
                <p>
                  Precio por persona
                  <br />
                  Se sirve a mesa completa
                </p>
                <input type="image"
                  className="menuForm__Icon"
                  src={require("../../../images/icons/circuloMas.png")}
                  alt="Añadir al pedido"
                  name="gift"
                  value="Menú degustación (70€)"
                  onClick={handleChange}
                />
              </div>

              <div className="menuForm__card">
                <h1>Experiencia 360º</h1>
                <h3>PVP: 125€</h3>
                <hr />
                <h4>12 pases / 2 bebidas incluidas</h4>
                <p>
                  Basado en nuestro amor y respeto por el producto y la
                  sencillez.
                </p>
                <p>
                  Precio por persona
                  <br />
                  Se serve a mesa completa
                </p>
                <input type="image"
                  className="menuForm__Icon"
                  src={require("../../../images/icons/circuloMas.png")}
                  alt="Añadir al pedido"
                  name="gift"
                  value="Experiencia 360º (125€)"
                  onClick={handleChange}
                />
              </div>

              <p>Número de personas:</p>
              <input
                label="1"
                type="radio"
                name="diners"
                value="1"
                onChange={handleChange}
              />
              <input
                label="2"
                type="radio"
                name="diners"
                value="2"
                onChange={handleChange}
              />
              <input
                label="3"
                type="radio"
                name="diners"
                value="3"
                onChange={handleChange}
              />
              <input
                label="4"
                type="radio"
                name="diners"
                value="4"
                onChange={handleChange}
              />
              <input
                label="5"
                type="radio"
                name="diners"
                value="5"
                onChange={handleChange}
              />
              <input
                label="6"
                type="radio"
                name="diners"
                value="6"
                onChange={handleChange}
              />
              <input
                label="7"
                type="radio"
                name="diners"
                value="7"
                onChange={handleChange}
              />
              <input
                label="8"
                type="radio"
                name="diners"
                value="8"
                onChange={handleChange}
              />
              {errors.diners && <p className="error">{errors.diners}</p>}

              <div className="vSpace"></div>
              <input className="standardButton" type="submit" value="Enviar" />
            </div>
          </form>
        ) : (
          " respuesta todo ok"
        )}
        ;
      </div>
    </>
  );
};

export default Regalar;
