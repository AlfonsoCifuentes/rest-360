import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ListadoPlatos = () => {
  //Props para el componente Acordeón:

  //Carta completa
  const [datosArray, setDatosArray] = useState([]);
  //const [ticketsArray, setTicketsArray] = useState([]);

  //Fetch de la carta al servidor
  useEffect(() => {
    fetch("http://localhost:3001/vga/articles")
      .then((response) => response.json())
      .then((data) => setDatosArray(data));
  }, []);

  console.log(setDatosArray);

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
            Listado de Platos
          </h1>
        </div>
        <table className="rwd-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Tipo</th>
              <th>Tiempo</th>
              <th>Imp.</th>
              <th>IVA</th>
              <th>PVP</th>
              <th>Alergenos</th>
              <th>Detalle</th>
            </tr>
          </thead>
          <tbody>
            {datosArray.map((item) => (
              <tr key={item.id}>
                <td className="div__table__center">{item.id}</td>
                <td className="div__table__right">{item.name}</td>
                <td className="div__table__center">{item.category}</td>
                <td className="div__table__center">{item.type}</td>
                <td className="div__table__center">{item.timeCook}</td>
                <td className="div__table__center">{item.cost}</td>
                <td className="div__table__center">{item.iva}</td>
                <td className="div__table__center">{item.pvp}</td>
                <td className="div__table__center">
                  {item.gluten ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_gluten.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.egg ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_huevos.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.fish ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_pescado.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.soja ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_soja.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.milk ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_lactosa.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.fructose ? (
                    <img
                      src={require("../../../images/icons/Aler_Azucar.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.mustard ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_mostaza.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.apio ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_apio.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.molusco ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_moluscos.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.altramuces ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_altramuces.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.sesamo ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_sesamo.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.sulfito ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_sulfitos.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                  {item.cacahuete ? (
                    <img
                      src={require("../../../images/icons/ico_alerg_cacahuetes.png")}
                      alt="Gluten"
                      className="alergenoIcon"
                    />
                  ) : (
                    <p></p>
                  )}
                </td>
                <td data-th="Ver detalle:" className="div__table__center">
                  <img
                    className="controlIcon"
                    src={require("../../../images/icons/flechaIcon.png")}
                    alt="Añadir al pedido"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListadoPlatos;
