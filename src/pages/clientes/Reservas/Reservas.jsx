import React, { useState } from "react";
import "./Reservas.scss";

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
};

const Reservas = () => {
  const [state, setState] = useState(INITIAL_STATE);

  const submitForm = (ev) => {
    ev.preventDefault();
    console.log("Datos del formulario:");
    console.log(state);
  };

  const handleInput = (ev) => {
    const { name, value } = ev.target;
    setState({ ...state, [name]: value });

  };

  return (
    <div className="formulario">
      <h1>Reservas</h1>

      
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
        <input label="1" type="radio" name="diners" value="1" onChange={handleInput} />
        <input label="2" type="radio" name="diners" value="2" onChange={handleInput} />
        <input label="3" type="radio" name="diners" value="3" onChange={handleInput} />
        <input label="4" type="radio" name="diners" value="4" onChange={handleInput} />
        <input label="5" type="radio" name="diners" value="5" onChange={handleInput} />
        <input label="6" type="radio" name="diners" value="6" onChange={handleInput} />
        <input label="7" type="radio" name="diners" value="7" onChange={handleInput} />
        <input label="8" type="radio" name="diners" value="8" onChange={handleInput} />


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
        <input label="13:30" type="radio" name="hour" value="13:30" onChange={handleInput} />
        <input label="14:00" type="radio" name="hour" value="14:00" onChange={handleInput} />
        <input label="14:30" type="radio" name="hour" value="14:30" onChange={handleInput} />
        <input label="15:00" type="radio" name="hour" value="15:00" onChange={handleInput} />
        <p className="hora">Cena:</p>
        <input label="20:30" type="radio" name="hour" value="20:30" onChange={handleInput} />
        <input label="21:00" type="radio" name="hour" value="21:00" onChange={handleInput} />
        <input label="21:30" type="radio" name="hour" value="21:30" onChange={handleInput} />
        <input label="22:00" type="radio" name="hour" value="22:00" onChange={handleInput} />

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
            placeholder="Email *"
          />
        </label>
        <div className="vspace"></div>
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
        <div></div>
        <label>
          <input
            type="checkbox"
            name="newsletter"
            value={state.newsletter}
            onChange={handleInput}
            placeholder="Newsletter"
          />
          Deseo recibir ofertas especiales y notificaciones del restaurante por
          correo electrónico y mensajes de texto.
        </label>

        <div>
          <button className="standardButton" type="submit">
            Reservar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reservas;
