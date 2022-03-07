import React from "react";
import StandardHeader from "../../../components/StandardHeader/StandardHeader";

const Regalar = () => {
  //Props para el componente de header genérico: StandardHeader
  const bgImage = "https://images2.imgbox.com/a0/dd/L5y1hFtA_o.jpg";
  
  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <h1 className="title">Regalar</h1>
    </div>
  );
};

export default Regalar;
