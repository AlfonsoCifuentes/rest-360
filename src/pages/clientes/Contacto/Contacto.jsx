import React, { useEffect } from "react";
import { useForm } from "../../../Hooks/useForm";
// import StandardHeader from "src/components/StandardHeader/StandardHeader";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";
import { Link } from "react-router-dom";

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

const Contacto = () => {
  const { form, errors, formOK, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );

  useEffect(() => {
    if (formOK) {
      console.log("Datos del formuario correctos. Guardamos en base de datos");
      console.log(form);
    } else {
      return;
    }
  }, [formOK]);

  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/d4/be/6FUoKJPx_o.jpg";

  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <div className="divForm">
        <h1 className="title">Contacto</h1>

        {!formOK ? (
          // Si el formulario no esta OK.
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

              <div className="vSpace"></div>
              <label>
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={form.newsletter}
                  onChange={handleChange}
                />
                Deseo recibir ofertas especiales y notificaciones del
                restaurante por correo electrónico y mensajes de texto.
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
            <p>Gracias por escribirnos.</p>
            <p>
              Valoraremos tu comentario y si es necesario, nos pondremos en
              contacto contigo lo antes posible.
            </p>
          </div>
        )}

        <div className="vSpace"></div>
        <div className="div__datos">
          <Link to="/dondeestamos">
            <button className="standardButton">Dónde estamos</button>
          </Link>
          <Link to="/horarios">
            <button className="standardButton">Horarios</button>
          </Link>
          <Link to="/reservas">
            <button className="standardButton">Reservas</button>
          </Link>
       </div> 
      </div>
    </div>
  );
};

export default Contacto;
