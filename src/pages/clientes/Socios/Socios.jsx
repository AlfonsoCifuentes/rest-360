import React from "react";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";

const Socios = ({usuario}) => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/69/b4/NbrJbPWf_o.jpg";

  const { firstName, lastName, email, password, phone, userName, foto } = usuario || {};
  
  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Socios</h1>
      <div className="sectionParagraph"> 
      <h2 className="subtitle">Mi perfil de usuario</h2>
      </div>
      <div className="sectionParagraph">
      <h4>{userName}</h4>
      <div className="roundDiv">
        <div className="roundImage" src={foto} alt={userName}></div>
      </div>
      </div>

      <div className="likeAButton">
        <p>Nombre: {firstName}</p>
        <p>Apellidos: {lastName}</p>
        <p>E-Mail: {email}</p>
        <p>Contraseña: {password}</p>
        <p>Teléfono: {phone}</p>
      </div>

      <div className="buttonsDiv">
        <button className="standardButton">Modificar datos</button>
      </div>
    </div>

  );
};

export default Socios;