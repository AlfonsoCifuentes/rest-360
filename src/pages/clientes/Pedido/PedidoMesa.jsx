import React, {useState, useEffect, useContext} from 'react'
import StandardHeader from 'src/components/StandardHeader/StandardHeader';
import { useForm } from "../../../Hooks/useForm";
import { CartContext } from "src/components/CartContext/CartContext";

const PedidoMesa = () => {

    //Props para el componente de header genérico: StandardHeader
    const bgImage = "https://images2.imgbox.com/3b/b3/gCfNWEuG_o.jpg";

  const [idMesa, setIdMesa] = useState(0);
  const [mesaFound, setMesaFound] = useState(false);
  
  //Contexto de carrito
  const {cartItems}  = useContext(CartContext);
  const {pvp}  = useContext(CartContext);
    
  //Comprobar si la mesa existe en la base de datos
  useEffect(()=>{
    fetch(`http://localhost:3001/api/tables/${form.idTable}`)
    .then ((response) => response.json())
    .then((data) => setIdMesa(data.id)) 
  })


  //Estado inicial del formulario
  const initialForm = {
    diners: "",
    idTable: "",
  };


  //Validaciones del formulario
  const validationsForm = (form) => {
    let errors = {};

    if (!form.diners.trim()) {
      errors.diners = "El 'Número de Personas' es requerido";
    }
    if (!form.idTable.trim()) {
      errors.idTable = "El número de mesa es requerido";
    }
    return errors;
  };


 const { form, errors, formOK, handleChange, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );


  //Efecto que controla si el formulario está correcto
  useEffect(() => {
    if (formOK) {
      console.log("Datos del formuario correctos. Pedido enviado.");
    } else {
      return;
    }
  }, [formOK]);


  //Seteando a true la variable mesaFound si la mesa introducida existe en base de datos
  useEffect(()=> {
    idMesa === parseInt(form.idTable) ? setMesaFound(true) : setMesaFound(false)
  }, [idMesa, form.idTable])

  return (
    <div className="mainDiv">
      <StandardHeader bgImage={bgImage} />
      <div className="divForm">
        <h1 className="title">Su Pedido</h1>

        {!formOK ? (

          // Si el formulario no esta OK.
          <div className='formDiv'>
          <form onSubmit={handleSubmit}>
            <div className="buttonsDiv">
            <p>Introduzca el número de su mesa</p>
            <input
              label="1"
              type="number"
              name="idTable"
              onChange={handleChange}
            />
            </div>
            {errors.idTable && <p className="error">{errors.idTable}</p>}

            <div className='peopleDiv'>
            <p>Número de personas:</p>
            <input
              label="1"
              type="radio"
              name="diners"
              value="1"
              onChange={handleChange}
            />
            <input
              label="2"
              type="radio"
              name="diners"
              value="2"
              onChange={handleChange}
            />
            <input
              label="3"
              type="radio"
              name="diners"
              value="3"
              onChange={handleChange}
            />
            <input
              label="4"
              type="radio"
              name="diners"
              value="4"
              onChange={handleChange}
            />
            <input
              label="5"
              type="radio"
              name="diners"
              value="5"
              onChange={handleChange}
            />
            <input
              label="6"
              type="radio"
              name="diners"
              value="6"
              onChange={handleChange}
            />
            <input
              label="7"
              type="radio"
              name="diners"
              value="7"
              onChange={handleChange}
            />
            <input
              label="8"
              type="radio"
              name="diners"
              value="8"
              onChange={handleChange}
            />
            </div>
            {errors.diners && <p className="error">{errors.diners}</p>}

            <input className='standardButton' type="submit" value="Enviar" />
            
          </form>
          </div>

        ) : (

          // Si el formulario esta Ok y se ha enviado.
          <div className="confirmationLessMargin">
            <img
              className="bigIcon"
              src={require("../../../images/icons/RoundedTickIcon.png")}
              alt="Pedido OK"
            />
            <div className="vSpace" />
            Tu pedido se ha registrado con éxito.
            <div className="vSpace" />
            Número de mesa: {form.idTable}
            <br />
            <div className="vSpace" />
            Personas: {form.diners}
            <br />
            <div className="vSpace" />
            Precio total: <h2>{pvp}€ ({cartItems.length} artículos)</h2>
            <br />
            <div className="vSpace" />
            ¡Gracias por venir a comer a nuestro restaurante!
          </div>
        )}
      </div>
    </div>
  );
}

export default PedidoMesa