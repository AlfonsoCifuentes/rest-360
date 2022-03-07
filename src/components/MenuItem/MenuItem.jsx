import React from "react";
import "./styles.scss";

const MenuItem = (props) => {
  return (
    <div>

      <div className="menuItemDiv">

        <div className="roundDiv">
          <img className="roundImage" src={props.image} alt={props.product} />
        </div>

        <div>
          <h1>{props.product}</h1>
          <p>{props.type}</p>
          <p>Precio: {props.pvp}</p>
        </div>

      </div>
      
    </div>
  );
};

export default MenuItem;
