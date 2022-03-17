import React, { useState } from "react";
import StandardHeader from "src/components/StandardHeader/StandardHeader";

const INITIAL_STATE = {
  diners: "",
  date: "",
  hour: "",
  name: "",
  surnames: "",
  phone: "",
  email: "",
  allergies: "",
  request: "",
  newsletter: "",
  privacy:"",
};

const Reservas = () => {

  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/d4/be/6FUoKJPx_o.jpg";


  const [state, setState] = useState(INITIAL_STATE);
  const [envioForm, setEnvioForm] = useState(false);

  const submitForm = (ev) => {
    ev.preventDefault();

      // Validamos campos del formulario.
    let errors = {};

    if (!state.diners) {
      errors.diners = "Diners is required!";
    }
  
    if (!state.date) {
      errors.date = "Date is required!";
    }
  
    if (!state.hour) {
      errors.hour = "Hour is required!";
    }
  
    if (!state.name) {
      errors.name = "Name is required!";
    } else if (state.name.length <= 1) {
      errors.name = "Name has to be 1 character at less!";
    }

    if (!state.surnames) {
      errors.surnames = "Surnames is required!";
    } else if (state.name.length <= 1) {
      errors.surnames = "Surnames has to be 1 character at less!";
    }

    if (!state.surnames) {
      errors.surnames = "Surnames is required!";
    } else if (state.name.length <= 1) {
      errors.surnames = "Surnames has to be 1 character at less!";
    }

    if (!state.phone) {
      errors.phone = "Phone is required!";
    } else if (state.phone.length < 9) {
      errors.phone = "Phone has to be 9 character at less!";
    }

    if (!state.privacy) {
      errors.privacy = "The privacy is required!";
    }


    // if(!errors.length){
    //   console.log(errors);
    //   errors = {};
    // }else{

      console.log(errors);
    // aqui MySQL para guardado de datos.
    console.log("Datos del formulario:");
    console.log(state);
    setEnvioForm(true);
    
    // }
    
  };


  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setState({ ...state, [name]: value });
  };

  if (!envioForm) {
    return (
      <div className="mainDiv">
      <StandardHeader bgImage={bgImage}/>
          <div className="divForm">
        <h1 className="title">Reservas</h1>

        {/* <button
        className="btnreservas"
        onClick={handleInput}
        name="diners"
        value="1"
      >
        1
      </button>
      <button
        className="btnreservas"
        onClick={handleInput}
        name="diners"
        value="2"
      >
        2
      </button>
      <button
        className="btnreservas"
        onClick={handleInput}
        name="diners"
        value="3"
      >
        3
      </button>
      <button
        className="btnreservas"
        onClick={handleInput}
        name="diners"
        value="4"
      >
        4
      </button>
       */}

        <form onSubmit={submitForm}>
          <p>Número de personas:</p>
          <input
            label="1"
            type="radio"
            name="diners"
            value="1"
            onChange={handleInput}
          />
          <input
            label="2"
            type="radio"
            name="diners"
            value="2"
            onChange={handleInput}
          />
          <input
            label="3"
            type="radio"
            name="diners"
            value="3"
            onChange={handleInput}
          />
          <input
            label="4"
            type="radio"
            name="diners"
            value="4"
            onChange={handleInput}
          />
          <input
            label="5"
            type="radio"
            name="diners"
            value="5"
            onChange={handleInput}
          />
          <input
            label="6"
            type="radio"
            name="diners"
            value="6"
            onChange={handleInput}
          />
          <input
            label="7"
            type="radio"
            name="diners"
            value="7"
            onChange={handleInput}
          />
          <input
            label="8"
            type="radio"
            name="diners"
            value="8"
            onChange={handleInput}
          />

          <p>Seleccione una fecha:</p>
          <label>
            <input
              type="date"
              name="date"
              onChange={handleInput}
              placeholder="Fecha"
            ></input>
          </label>

          <p>Seleccione una hora:</p>
          <p className="hora">Comida</p>
          <input
            label="13:30"
            type="radio"
            name="hour"
            value="13:30"
            onChange={handleInput}
          />
          <input
            label="14:00"
            type="radio"
            name="hour"
            value="14:00"
            onChange={handleInput}
          />
          <input
            label="14:30"
            type="radio"
            name="hour"
            value="14:30"
            onChange={handleInput}
          />
          <input
            label="15:00"
            type="radio"
            name="hour"
            value="15:00"
            onChange={handleInput}
          />
          <p className="hora">Cena:</p>
          <input
            label="20:30"
            type="radio"
            name="hour"
            value="20:30"
            onChange={handleInput}
          />
          <input
            label="21:00"
            type="radio"
            name="hour"
            value="21:00"
            onChange={handleInput}
          />
          <input
            label="21:30"
            type="radio"
            name="hour"
            value="21:30"
            onChange={handleInput}
          />
          <input
            label="22:00"
            type="radio"
            name="hour"
            value="22:00"
            onChange={handleInput}
          />

          <div className="div__datos">
          <p>Datos de la reserva:</p>
          <label>
            <input
              type="text"
              name="name"
              value={state.name}
              onChange={handleInput}
              placeholder="Nombre *"
            />
          </label>
          <label>
            <input
              type="text"
              name="surnames"
              value={state.surnames}
              onChange={handleInput}
              placeholder="Apellidos *"
            />
          </label>
          <label>
            <input
              type="text"
              name="phone"
              value={state.phone}
              onChange={handleInput}
              placeholder="Telefono *"
            />
          </label>
          <label>
            <input
              type="text"
              name="email"
              value={state.email}
              onChange={handleInput}
              placeholder="Email"
            />
          </label>
          <div className="vSpace"></div>
          <label>
            <input
              type="text"
              name="allergies"
              value={state.allergies}
              onChange={handleInput}
              placeholder="Alergias"
            />
          </label>

          <label>
            <textarea
              type="text"
              name="request"
              value={state.request}
              onChange={handleInput}
              placeholder="Solicitud particular"
            />
          </label>
          
          <div className="vSpace"></div>
          <label>
            <input
              type="checkbox"
              name="newsletter"
              checked={state.newsletter}
              onChange={handleInput}
            />
            Deseo recibir ofertas especiales y notificaciones del restaurante
            por correo electrónico y mensajes de texto.
          </label>
          <div></div>
          <label>
            <input
              type="checkbox"
              name="privacy"
              checked={state.privacy}
              onChange={handleInput}
            />
            Acepto Políticas de Privacidad.
          </label>
          </div>

          <div>
            <button className="standardButton" type="submit">
              Reservar
            </button>
          </div>
        </form>
      </div>
      </div>
      
    );
  } else {
    return (
      <div className="mainDiv">
      <StandardHeader bgImage={bgImage}/>
              <div className="divForm">
        <h1 className="title">Reservas</h1>
        <div className="confirmation">
          <img
            className="bigIcon"
            src={require("../../../images/icons/RoundedTickIcon.png")}
            alt="Facebook logo"
          />
          <div className="vSpace" />
          Tu reserva se ha registrado con éxito.
          <div className="vSpace" />
          Día: {state.date}
          <br />
          Hora: {state.hour}
          <br />
          Personas: {state.diners} <br />
          <div className="vSpace" />
          ¡Te esperamos!
        </div>
      </div>
      </div>

    );
  }
};

export default Reservas;
