import React, { useState, useEffect, useContext, useMemo } from "react";
import { CartContext } from "src/components/CartContext/CartContext";
import Acordeon from "src/components/Accordion/Acordeon";
import StandardHeader from "src/components/StandardHeader/StandardHeader";
import { Link } from "react-router-dom";

const Pedido = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/d4/be/6FUoKJPx_o.jpg";
  //Contexto de carrito
  const {cartItems}  = useContext(CartContext);
  //Array para almacenar los artículos del pedido
  let pedidoArray = [];
  //Pedido por categorías
  const [entrantesArray, setEntrantesArray] = useState([]);
  const [principalesArray, setPrincipalesArray] = useState([]);
  const [segundosArray, setSegundosArray] = useState([]);
  const [postresArray, setPostresArray] = useState([]);
  const [bebidasArray, setBebidasArray] = useState([]);
  //Fetch de la carta al servidor
  useEffect(() => {
      cartItems.map((item) => {
        fetch(`http://localhost:3001/vga/articles/${item}`)   
        .then ((response) => response.json())
        .then ((article) => pedidoArray.push(article))
      })   
  },[cartItems])
  //Filtrado del pedido completo en arrays de categorías

  useEffect(()=> {
    console.log(pedidoArray)
  })

      useEffect(() => {
        setEntrantesArray(pedidoArray.filter(plato => plato.category === "Entrante"))
        setPrincipalesArray(pedidoArray.filter(plato => plato.category === "Primeros"))
        setSegundosArray(pedidoArray.filter(plato => plato.category === "Segundos"))
        setPostresArray(pedidoArray.filter(plato => plato.category === "Postres"))
        setBebidasArray(pedidoArray.filter(plato => plato.category === "Bebidas"))
    }, [], ); 

//
  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Su pedido</h1>
      <div className="sectionParagraph">
        <p>
          Su pedido está compuesto por los siguientes productos:
        </p>
      </div>
      <Acordeon title="ENTRANTES" response={entrantesArray} key="EntrantesDelPedido"/>
      <Acordeon title="PINCIPALES" response={principalesArray} key="PrincipalesDelPedido"/>
      <Acordeon title="SEGUNDOS" response={segundosArray} key="SegundosDelPedido"/>
      <Acordeon title="POSTRES" response={postresArray} key="PostresDelPedido"/>
      <Acordeon title="BEBIDAS" response={bebidasArray} key="BebidasDelPedido"/>
      <div className="buttonsDiv">
          <Link to="/su-pedido">
            <button className="standardButton">Realizar pedido</button>
          </Link>
        </div>
    </div>
  );
}

export default Pedido