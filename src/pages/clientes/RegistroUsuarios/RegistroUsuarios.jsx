import React from 'react'
import RegisterForm from 'src/components/RegisterForm/RegisterForm';
import StandardHeader from 'src/components/StandardHeader/StandardHeader';

const RegistroUsuarios = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/3b/b3/gCfNWEuG_o.jpg";

  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Registrarse como usuario</h1>
      <div className='"sectionParagraph'>
          <p>Introduzca los datos solicitados, y ¡forme parte ahora de la familia Rest360!</p>
      </div>
      <RegisterForm />
    </div>
  );
}

export default RegistroUsuarios