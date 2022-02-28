import React from "react";
import "./styles.scss"


const Home = () => {
  return (
    <div>
      <div className="homeUp">
        <div>
          <h1 className="title">Bienvenidos</h1>
          <div className="homeUp__subtitle">
             <h3 className="subtitle">COCINA CREATIVA Y DE AUTOR</h3>
          </div>
          
          
        </div>
        <div className="homeUp__buttons">
          <button className="translucidButton">Restaurante</button>
          <button className="translucidButton">Reservas</button>
        </div>
      </div>

      <div className="homeDown">
        <div>
          <p>
            La cocina de rest360º está basada en los productos de la tierra, en
            elaboraciones especiadas, de sabores intensos; una cocina repleta de
            excelencias.
          </p>
        </div>
        <div  className="homeDown__buttons">
          <button className="standardButton">Carta / Pedidos</button>
          <button className="standardButton">Regalar</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
