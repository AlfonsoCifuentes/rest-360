

//
/*

Pendiente de limpiar este codigo
El codigo bueno empieza en la linea 400

*/

// import React, { useState } from "react";
// import StandardHeader from "src/components/StandardHeader/StandardHeader";

// const INITIAL_STATE = {
//   diners: "",
//   date: "",
//   hour: "",
//   name: "",
//   surnames: "",
//   phone: "",
//   email: "",
//   allergies: "",
//   request: "",
//   newsletter: "",
//   privacy:"",
// };

// const Reservas = () => {

//   //Props para el componente de header genérico: StandardHeader
//   const bgImage = "https://images2.imgbox.com/d4/be/6FUoKJPx_o.jpg";

//   const [state, setState] = useState(INITIAL_STATE);
//   const [envioForm, setEnvioForm] = useState(false);

//   const submitForm = (ev) => {
//     ev.preventDefault();

//       // Validamos campos del formulario.
//     let errors = {};

//     if (!state.diners) {
//       errors.diners = "Diners is required!";
//     }

//     if (!state.date) {
//       errors.date = "Date is required!";
//     }

//     if (!state.hour) {
//       errors.hour = "Hour is required!";
//     }

//     if (!state.name) {
//       errors.name = "Name is required!";
//     } else if (state.name.length <= 1) {
//       errors.name = "Name has to be 1 character at less!";
//     }

//     if (!state.surnames) {
//       errors.surnames = "Surnames is required!";
//     } else if (state.name.length <= 1) {
//       errors.surnames = "Surnames has to be 1 character at less!";
//     }

//     if (!state.surnames) {
//       errors.surnames = "Surnames is required!";
//     } else if (state.name.length <= 1) {
//       errors.surnames = "Surnames has to be 1 character at less!";
//     }

//     if (!state.phone) {
//       errors.phone = "Phone is required!";
//     } else if (state.phone.length < 9) {
//       errors.phone = "Phone has to be 9 character at less!";
//     }

//     if (!state.privacy) {
//       errors.privacy = "The privacy is required!";
//     }

//     if(!errors.length){
//       console.log(errors);
//       errors = {};
//     }else{

//       console.log(errors);
//     // aqui MySQL para guardado de datos.
//     console.log("Datos del formulario:");
//     console.log(state);
//     setEnvioForm(true);

//     }

//   };

//   const handleInput = (ev) => {
//     const { name, value } = ev.target;
//     setState({ ...state, [name]: value });
//   };

//   if (!envioForm) {
//     return (
//       <div className="mainDiv">
//       <StandardHeader bgImage={bgImage}/>
//           <div className="divForm">
//         <h1 className="title">Reservas</h1>

//         {/* <button
//         className="btnreservas"
//         onClick={handleInput}
//         name="diners"
//         value="1"
//       >
//         1
//       </button>
//       <button
//         className="btnreservas"
//         onClick={handleInput}
//         name="diners"
//         value="2"
//       >
//         2
//       </button>
//       <button
//         className="btnreservas"
//         onClick={handleInput}
//         name="diners"
//         value="3"
//       >
//         3
//       </button>
//       <button
//         className="btnreservas"
//         onClick={handleInput}
//         name="diners"
//         value="4"
//       >
//         4
//       </button>
//        */}

//         <form onSubmit={submitForm}>
//           <p>Número de personas:</p>
//           <input
//             label="1"
//             type="radio"
//             name="diners"
//             value="1"
//             onChange={handleInput}
//           />
//           <input
//             label="2"
//             type="radio"
//             name="diners"
//             value="2"
//             onChange={handleInput}
//           />
//           <input
//             label="3"
//             type="radio"
//             name="diners"
//             value="3"
//             onChange={handleInput}
//           />
//           <input
//             label="4"
//             type="radio"
//             name="diners"
//             value="4"
//             onChange={handleInput}
//           />
//           <input
//             label="5"
//             type="radio"
//             name="diners"
//             value="5"
//             onChange={handleInput}
//           />
//           <input
//             label="6"
//             type="radio"
//             name="diners"
//             value="6"
//             onChange={handleInput}
//           />
//           <input
//             label="7"
//             type="radio"
//             name="diners"
//             value="7"
//             onChange={handleInput}
//           />
//           <input
//             label="8"
//             type="radio"
//             name="diners"
//             value="8"
//             onChange={handleInput}
//           />

//           <p>Seleccione una fecha:</p>
//           <label>
//             <input
//               type="date"
//               name="date"
//               onChange={handleInput}
//               placeholder="Fecha"
//             ></input>
//           </label>

//           <p>Seleccione una hora:</p>
//           <p className="hora">Comida</p>
//           <input
//             label="13:30"
//             type="radio"
//             name="hour"
//             value="13:30"
//             onChange={handleInput}
//           />
//           <input
//             label="14:00"
//             type="radio"
//             name="hour"
//             value="14:00"
//             onChange={handleInput}
//           />
//           <input
//             label="14:30"
//             type="radio"
//             name="hour"
//             value="14:30"
//             onChange={handleInput}
//           />
//           <input
//             label="15:00"
//             type="radio"
//             name="hour"
//             value="15:00"
//             onChange={handleInput}
//           />
//           <p className="hora">Cena:</p>
//           <input
//             label="20:30"
//             type="radio"
//             name="hour"
//             value="20:30"
//             onChange={handleInput}
//           />
//           <input
//             label="21:00"
//             type="radio"
//             name="hour"
//             value="21:00"
//             onChange={handleInput}
//           />
//           <input
//             label="21:30"
//             type="radio"
//             name="hour"
//             value="21:30"
//             onChange={handleInput}
//           />
//           <input
//             label="22:00"
//             type="radio"
//             name="hour"
//             value="22:00"
//             onChange={handleInput}
//           />

//           <div className="div__datos">
//           <p>Datos de la reserva:</p>
//           <label>
//             <input
//               type="text"
//               name="name"
//               value={state.name}
//               onChange={handleInput}
//               placeholder="Nombre *"
//             />
//           </label>
//           <label>
//             <input
//               type="text"
//               name="surnames"
//               value={state.surnames}
//               onChange={handleInput}
//               placeholder="Apellidos *"
//             />
//           </label>
//           <label>
//             <input
//               type="text"
//               name="phone"
//               value={state.phone}
//               onChange={handleInput}
//               placeholder="Telefono *"
//             />
//           </label>
//           <label>
//             <input
//               type="text"
//               name="email"
//               value={state.email}
//               onChange={handleInput}
//               placeholder="Email"
//             />
//           </label>
//           <div className="vSpace"></div>
//           <label>
//             <input
//               type="text"
//               name="allergies"
//               value={state.allergies}
//               onChange={handleInput}
//               placeholder="Alergias"
//             />
//           </label>

//           <label>
//             <textarea
//               type="text"
//               name="request"
//               value={state.request}
//               onChange={handleInput}
//               placeholder="Solicitud particular"
//             />
//           </label>

//           <div className="vSpace"></div>
//           <label>
//             <input
//               type="checkbox"
//               name="newsletter"
//               checked={state.newsletter}
//               onChange={handleInput}
//             />
//             Deseo recibir ofertas especiales y notificaciones del restaurante
//             por correo electrónico y mensajes de texto.
//           </label>
//           <div></div>
//           <label>
//             <input
//               type="checkbox"
//               name="privacy"
//               checked={state.privacy}
//               onChange={handleInput}
//             />
//             Acepto Políticas de Privacidad.
//           </label>
//           </div>

//           <div>
//             <button className="standardButton" type="submit">
//               Reservar
//             </button>
//           </div>
//         </form>
//       </div>
//       </div>

//     );
//   } else {
//     return (
//       <div className="mainDiv">
//       <StandardHeader bgImage={bgImage}/>
//               <div className="divForm">
//         <h1 className="title">Reservas</h1>
//         <div className="confirmation">
//           <img
//             className="bigIcon"
//             src={require("../../../images/icons/RoundedTickIcon.png")}
//             alt="Facebook logo"
//           />
//           <div className="vSpace" />
//           Tu reserva se ha registrado con éxito.
//           <div className="vSpace" />
//           Día: {state.date}
//           <br />
//           Hora: {state.hour}
//           <br />
//           Personas: {state.diners} <br />
//           <div className="vSpace" />
//           ¡Te esperamos!
//         </div>
//       </div>
//       </div>

//     );
//   }
// };

// export default Reservas;

import React, { useEffect, useState } from "react";
import { useForm } from "../../../Hooks/useForm";
// import StandardHeader from "src/components/StandardHeader/StandardHeader";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";
import { v4 as uuidv4 } from 'uuid';

const initialForm = {
  diners: "",
  date: "",
  hour:"",
  name: "",
  surnames: "",
  phone: "",
  email: "",
  allergies: "",
  comments: "",
};

const validationsForm = (form) => {
  let errors = {};

  if (!form.diners.trim()) {
    errors.diners = "El 'Número de Personas' es requerido";
  }

  if (!form.date.trim()) {
    errors.date = "La 'Fecha' es requerida";
  }

  if (!form.hour.trim()) {
    errors.hour = "La 'Hora' es requerida";
  }

  if (!form.name.trim()) {
    errors.name = "El 'Nombre' es requerido";
  }

  if (!form.surnames.trim()) {
    errors.surnames = "El 'Apellido' es requerido";
  }
  if (!form.phone.trim()) {
    errors.phone = "El 'Teléfono' es requerido";
  }

  if (!form.email.trim()) {
    errors.email = "El 'Email' es requerido";
  }

  if (!form.privacy) {
    errors.privacy = "Debe aceptar la política de privacicad";
  }

  return errors;
};

const Reservas = () => {
  const [message, setMessage] = useState("");
  const { form, errors, formOK, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );


  useEffect(() => {
    if (formOK) {
      guardadoDatos()
    } else {
      return;
    }
  }, [formOK]);
  

  let guardadoDatos = async (e) => {
        try{
            let response = await fetch("http://localhost:3001/api/booking/register", {
              
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({                   
                    idReserva: uuidv4(),
                    date: form.date,
                    hour: form.hour,
                    numPerson: form.diners,
                    name: form.name,
                    lastName: form.surnames,
                    phone: form.phone,
                    email: form.email,
                    allergic: form.allergies,
                    text: form.comments,
                    ofertas: (form.newsletter? 1:0),
                    confirmacion: 0,

                })
            });
            let responseJson = await response.json();
            if(response.status === 200) {

                setMessage("Usuario creado con éxito");
                //initialForm()
                
                // setTimeout(() => {
                //   goToLogin()
                // }, 750)
                
            }else{
                setMessage("Ha habido un error");
            }
            
        }catch (err) {
            console.log(err);
            }
    
          }

  







  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/d4/be/6FUoKJPx_o.jpg";

  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <div className="divForm">
        <h1 className="title">Reservas</h1>

        {!formOK ? (

          // Si el formulario no esta OK.
          <form onSubmit={handleSubmit}>
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

            <p>Seleccione una fecha:</p>
            <label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                placeholder="Fecha"
              ></input>
            </label>
            {errors.date && <p className="error">{errors.date}</p>}

           <p>Seleccione una hora:</p>
           <p className="hora">Comida</p>
           <input
            label="13:30"
            type="radio"
            name="hour"
            value="13:30"
            onChange={handleChange}
          />
          <input
            label="14:00"
            type="radio"
            name="hour"
            value="14:00"
            onChange={handleChange}
          />
          <input
            label="14:30"
            type="radio"
            name="hour"
            value="14:30"
            onChange={handleChange}
          />
          <input
            label="15:00"
            type="radio"
            name="hour"
            value="15:00"
            onChange={handleChange}
          />
          <p className="hora">Cena:</p>
          <input
            label="20:30"
            type="radio"
            name="hour"
            value="20:30"
            onChange={handleChange}
          />
          <input
            label="21:00"
            type="radio"
            name="hour"
            value="21:00"
            onChange={handleChange}
          />
          <input
            label="21:30"
            type="radio"
            name="hour"
            value="21:30"
            onChange={handleChange}
          />
          <input
            label="22:00"
            type="radio"
            name="hour"
            value="22:00"
            onChange={handleChange}
          />
          {errors.hour && <p className="error">{errors.hour}</p>}

          <div className="div__datos">
            <p>Datos personales:</p>
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
              placeholder="Apellidos *"
              onChange={handleChange}
              value={form.surnames}
            />
            {errors.surnames && <p className="error">{errors.surnames}</p>}

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

            <p>Otra información:</p>
            <input
              type="text"
              name="allergies"
              placeholder="Alergias"
              onChange={handleChange}
              value={form.allergies}
            />

            <textarea
              name="comments"
              cols="50"
              rows="5"
              placeholder="Solicitud particular"
              onChange={handleChange}
              value={form.comments}
            />

            <div className="vSpace"></div>
            <label>
              <input
                type="checkbox"
                name="newsletter"
                checked={form.newsletter}
                onChange={handleChange}
              />
              Deseo recibir ofertas especiales y notificaciones del restaurante
              por correo electrónico y mensajes de texto.
            </label>
            <div></div>
            <label>
              <input
                type="checkbox"
                name="privacy"
                checked={form.privacy}
                onChange={handleChange}
              />
              Acepto Políticas de Privacidad.
            </label>
            {errors.privacy && <p className="error">{errors.privacy}</p>}

            <input type="submit" value="Enviar" />
            {message && <div style={{color: 'tomato'}}>{message}</div>}
            </div>
          </form>


        ) : (

          // Si el formulario esta Ok y se ha enviado.
          <div className="confirmation">
            <img
              className="bigIcon"
              src={require("../../../images/icons/RoundedTickIcon.png")}
              alt="Facebook logo"
            />
            <div className="vSpace" />
            Tu reserva se ha registrado con éxito.
            
            <div className="vSpace" />
            Día: {form.date}
            <br />
            Hora: {form.hour}
            <br />
            Personas: {form.diners} <br />
            <div className="vSpace" />
            ¡Te esperamos!
          </div>
        )}
      </div>
    </div>
  );
};

export default Reservas;
