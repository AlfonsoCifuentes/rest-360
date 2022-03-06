import React, {useEffect} from "react";
import Acordeon from "src/components/Accordion/Acordeon";
import StandardHeader from "src/components/StandardHeader/StandardHeader";


const CartaPedidos = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/c1/2d/UgwCbQiR_o.jpg";

  const estoSeraUnaRespuestaEnJSON = ["Cocido Madrileño","Callos","Pulpo a la Gallega","Fabadaca con chorizaco"]

  useEffect(() => {
    console.log(estoSeraUnaRespuestaEnJSON)
  })

  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Carta / Pedidos</h1>
      <div className="sectionParagraph">
        <p>
          La cocina de rest360º está basada en los productos de la tierra, en
          elaboraciones especiadas, de sabores intensos; una cocina repleta de
          excelencias.
        </p>
        <p>
          Con nuestra carta digital de pedidos, puede realizar un{" "}
          <strong>pedido para su mesa</strong>, un pedido{" "}
          <strong>para recoger</strong> en nuestro restaurante o un pedido para{" "}
          <strong>envío a domicilio.</strong>
        </p>
      </div>
      <Acordeon title="ENTRANTES" response={estoSeraUnaRespuestaEnJSON}/>
      <Acordeon title="PINCIPALES" response={estoSeraUnaRespuestaEnJSON} />
      <Acordeon title="SEGUNDOS" response={estoSeraUnaRespuestaEnJSON} />
      <Acordeon title="POSTRES" response={estoSeraUnaRespuestaEnJSON} />
      <Acordeon title="BEBIDAS" response={estoSeraUnaRespuestaEnJSON} />

    </div>
  );
};

export default CartaPedidos;
