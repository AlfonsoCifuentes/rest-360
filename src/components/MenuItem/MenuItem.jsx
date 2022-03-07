import React from "react";
import "./styles.scss";

const MenuItem = (props) => {
  return (
    <div>
      <div className="menuItemDiv">
        <div className="menuItemDiv__image">
          <div className="roundDiv">
            <img className="roundImage" src={props.image} alt={props.product} />
          </div>
        </div>

        <div className="menuItemDiv__titleandprice">
          <div className="menuItemDiv__titleandprice__divTitle">
            <h1 className="menuItemDiv__titleandprice__divTitle__title">
              {props.product}
            </h1>
          </div>
          <div className="menuItemDiv__titleandprice__divPrice">
            <p className="menuItemDiv__titleandprice__divPrice__price">
              <strong>{props.pvp}€</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
