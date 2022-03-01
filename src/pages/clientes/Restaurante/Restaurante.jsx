import React from "react";
import PhotoCarousel from "../../../components/PhotoCarousel/PhotoCarousel";
import "./styles.scss";

const Restaurante = () => {
  return (
    <div className="mainDiv">
      <div className="photoHeader"></div>
      <h1 className="title">Restaurante</h1>
      <div className="carousel">
          <PhotoCarousel />
      </div>
      <div className="sectionParagraph">
        <p>
          La cocina de rest360º está basada en los productos de la tierra, en
          elaboraciones especiadas, de sabores intensos; una cocina repleta de
          excelencias.
        </p>
        <p>
          Con nuestra carta digital de pedidos, puede realizar un pedido para
          su mesa. un pedido para recoger en nuestro restaurante o un pedido
          para envío a domicilio.
        </p>
      </div>
      <div className="dishGallery"></div>
      <div className="buttonsDiv">
          <button className="standardButton">Reservas</button>
          <button className="standardButton">Carta/Pedidos</button>
          <button className="standardButton">Regalar</button>
      </div>
    </div>
  );
};

export default Restaurante;
