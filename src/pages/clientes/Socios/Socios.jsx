import React from "react";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";

const Socios = ({user}) => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/69/b4/NbrJbPWf_o.jpg";

  const { nombre, apellidos, email, password, telefono, username, foto } = user || {};
  
  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Socios</h1>
      <div className="sectionParagraph"> 
      <h2 className="subtitle">Mi perfil de usuario</h2>
      </div>
      <div className="sectionParagraph">
      <h4>{username}</h4>
      <div className="roundDiv">
        <div className="roundImage" src={foto} alt={username}></div>
      </div>
      </div>

      <div className="likeAButton">
        <p>Nombre: {nombre}</p>
        <p>Apellidos: {apellidos}</p>
        <p>E-Mail: {email}</p>
        <p>Contraseña: {password}</p>
        <p>Teléfono: {telefono}</p>
      </div>

      <div className="buttonsDiv">
        <button className="standardButton">Modificar datos</button>
      </div>
    </div>

  );
};

export default Socios;