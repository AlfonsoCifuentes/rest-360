import React, { useState, useContext } from "react";
import "./styles.scss";
import MenuItem from "../MenuItem/MenuItem";
import { CartContext } from "../CartContext/CartContext"
const Acordeon = (props) => {
  const [deployed, setDeployed] = useState(true);

  let JSONresponse = props.response;

  const {cartItems, setCartItems} = useContext(CartContext)

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
          {JSONresponse.map((item, i) => (
            <MenuItem
              product={item.name}
              key={item.id}
              idArticle={item.idArticle}
              type={item.type}
              image={item.image}
              timeCook={item.timeCook}
              cost={item.cost}
              iva={item.iva}
              pvp={item.pvp}
              active={item.active}
              gluten={item.gluten}
              egg={item.egg}
              fish={item.fish}
              soja={item.soja}
              milk={item.milk}
              fructose={item.fructose}
              mustard={item.mustard}
              apio={item.apio}
              molusco={item.molusco}
              altramuces={item.altramuces}
              sesamo={item.sesamo}
              sulfito={item.sulfito}
              cacahuete={item.cacahuete}
              createdAt={item.createdAt}
              updatedAt={item.updatedAt}
              cart={[...cartItems, item.idArticle]}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Acordeon;
