import React from 'react'
import StandardHeader from 'src/components/StandardHeader/StandardHeader';

const PedidoMesa = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/3b/b3/gCfNWEuG_o.jpg";
  
  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Su Pedido</h1>
      <div className='"sectionParagraph'>
          <p>Introduzca el código de su mesa</p>
      </div>
    </div>
  );
}

export default PedidoMesa