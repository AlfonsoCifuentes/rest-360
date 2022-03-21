import React from "react";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";

const Socios = ({user}) => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/69/b4/NbrJbPWf_o.jpg";
  
  const { firstName, lastName, email, password, phone, userName, avatar } = user|| {};
  const firstNameInitial = firstName.charAt(0);
  const lastNameInitial = lastName.charAt(0);


  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Socios</h1>
      <div className="sectionParagraph"> 
      <h2 className="subtitle">Mi perfil de usuario</h2>
      </div>
      <div className="userHeader">
      <div>
      <h3>{userName}</h3>
      <div className="roundDivProfile">
        <p className="roundDivProfile__initials">{firstNameInitial}{lastNameInitial}</p>
      </div>
      </div>


      </div>

      <div className="likeAButton">
        <p><strong>Nombre:</strong> {firstName}</p>
        <p><strong>Apellidos:</strong> {lastName}</p>
        <p><strong>E-mail:</strong> {email}</p>
        <p><strong>Teléfono</strong> {phone}</p>
      </div>

      <div className="buttonsDiv">
        <button className="standardButton">Modificar datos</button>
      </div>
    </div>

  );
};

export default Socios;