import React, {useState, useEffect} from "react";


const ListadoTickets = () => {

  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  const [ticketsArray, setTicketsArray] = useState([]);


  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/vga/articles") //Cambiar a bill cuando tenga datos.
    .then ((response) => response.json())
    .then((data) =>   console.log(data)); 
  },[]);


  return (
    <div className="mainDiv">
      <h1 className="title">Listado de Tickets</h1>
      <div className="sectionParagraph">
        <p>
          La cocina de rest360º está basada en los productos de la tierra, en
          elaboraciones especiadas, de sabores intensos; una cocina repleta de
          excelencias.
        </p>
        
      </div>

    </div>
  );
};

export default ListadoTickets;