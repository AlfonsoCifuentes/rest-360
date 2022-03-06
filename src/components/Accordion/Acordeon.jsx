import React, { useState } from "react";
import "./styles.scss";
import MenuItem from "../MenuItem/MenuItem";

const Acordeon = (props) => {
  const [deployed, setDeployed] = useState(true);

  let JSONresponse = props.response;

  return (
    <div className="acordeonDiv">
      <div className="acordeonDiv__element">
        <div>
          <h3>{props.title}</h3>
        </div>

        {!deployed ? (
          <div onClick={() => setDeployed(true)}>
            <img
              className="acordeonDiv__element__image"
              src={require("../../images/icons/TrianguloArriba.png")}
              alt="pulsar para desplegar"
            />
          </div>
        ) : (
          <div onClick={() => setDeployed(false)}>
            <img
              className="acordeonDiv__element__image"
              src={require("../../images/icons/Trianguloabajo.png")}
              alt="pulsar para encoger"
            />
          </div>
        )}
      </div>
      {deployed ? (
        <div></div>
      ) : (
        <div className="deployedDiv">
        {JSONresponse.map ((item, i) => (
          <MenuItem product={item} key={item}/>
        ))}
  
        </div>
      )}
    </div>
  );
};

export default Acordeon;
