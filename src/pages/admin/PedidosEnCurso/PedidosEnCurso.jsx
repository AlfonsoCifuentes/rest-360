import React, { useState, useEffect } from "react";
import OrderItem from "../../../components/OrderItem/OrderItem";
import { Link } from "react-router-dom";

const PedidosEnCurso = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/vga/orders")
      .then((response) => response.json())
      .then((data) => setDatosArray(data));
  }, []);

  console.log("Datos en PEC");
  console.log(datosArray);

  return (
    <div className="mainDiv">
      <div className="sectionParagraph">
        <div className="titleAdmin">
          <h1 className="title">
            <Link to="/admmain">
              <img
                src={require("../../../images/icons/ico_flechaizquierda.png")}
                alt="Volver al menú de administración"
                className="arrowIcon"
              />
            </Link>
            Pedidos
          </h1>
        </div>

        {datosArray.map((pedidos) => (
          <OrderItem pedidos={pedidos} key={pedidos.id}/>
        ))}
        
      </div>
    </div>
  );
};

export default PedidosEnCurso;
