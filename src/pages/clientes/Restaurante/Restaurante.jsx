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
      <div className="dishGallery">
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/pulpo Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/croquetas Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/carneasada Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/postresofisticado Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/ensaladatropical Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/cangrejaco Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/verdurabrasa.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/plato2 Cropped.jpg")} alt="Foto de nuestros platos"/></div>
        <div className="roundDiv"><img className="roundImage" src={require ("../../../images/photos/ensaladaconnachos Cropped.jpg")} alt="Foto de nuestros platos"/></div>
      </div>
      <div className="buttonsDiv">
          <button className="standardButton">Reservas</button>
          <button className="standardButton">Carta/Pedidos</button>
          <button className="standardButton">Regalar</button>
      </div>
    </div>
  );
};

export default Restaurante;
