import React, {useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Navigate } from "react-router-dom";
import { useForm } from "src/Hooks/useForm";


const RegisterForm = () => {

    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    
    const [idUser, setIdUser] = useState(uuidv4());

    const [message, setMessage] = useState("");

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


  const handleRegister = () => {
    handleSubmit() 
    registerUser() 
  }


    const goToLogin = () => {
     return <Navigate to="/login" state={{prevRoute: window.location.pathname}} />
    }

    let registerUser = async (e) => {
        e.preventDefault();
        try{
            let response = await fetch("http://localhost:3001/api/users/register", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    idUser: idUser,
                    userName: userName,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                    phone: phone,
                    dateOfBirth: dateOfBirth,
                    
                })
            });
            let responseJson = await response.json();
            if(response.status === 200) {

                setUserName(form.userName);
                setFirstName(form.firstName);
                setLastName(form.lastName);
                setEmail(form.email);
                setPassword(form.password);
                setPhone(form.phone);
                setDateOfBirth(form.dateOfBirth);
                
                setMessage("Usuario creado con éxito");
                setTimeout(() => {
                  goToLogin()
                }, 750)
                
            }else{
                setMessage("Ha habido un error");
            }
            
        }catch (err) {
            console.log(err);
            }
    }



  return (
    <div className="divForm">
      {!formOK ? (

      // Si el formulario no esta OK.

    <form onSubmit={handleRegister}>

  
        <p>Nombre de usuario (apodo)</p>
        <input type="text" name="userName" onChange={handleChange} value={userName} />
    
      {errors.userName && <p className="error">{errors.userName}</p>}
      
      <label>
        <p>Nombre</p>
        <input type="text" name="firstName" onChange={handleChange} value={firstName} />
      </label>
      {errors.firstName && <p className="error">{errors.firstName}</p>}
           
      <label>
        <p>Apellidos</p>
        <input type="text" name="lastName" onChange={handleChange} value={lastName} />
      </label>
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <label>
        <p>Correo electrónico</p>
        <input type="email" name="email" onChange={handleChange} value={email} />
      </label>
      {errors.email && <p className="error">{errors.email}</p>}

      <label>
        <p>Contraseña</p>
        <input type="password" name="password" onChange={handleChange} value={password} />
      </label>
      {errors.password && <p className="error">{errors.password}</p>}

      <label>
        <p>Teléfono</p>
        <input type="number" name="phone" onChange={handleChange} value={phone} />
      </label>
      {errors.phone && <p className="error">{errors.phone}</p>}

      <label>
        <p>Fecha de nacimiento</p>
        <input type="date" format="yyyy-mm-dd" name="dateOfBirth"  onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth} />
      </label>
      {errors.dateOfBirth && <p className="error">{errors.dateOfBirth}</p>}



      <div>
        <button className='standardButton' type='submit'>Registrarme</button>
      </div>

      {message && <div style={{color: 'tomato'}}>{message}</div>}
    </form>

) : (

  // Si el formulario esta Ok y se ha enviado.
  <div className="confirmation">
    <img
      className="bigIcon"
      src={require("src/images/icons/RoundedTickIcon.png")}
      alt="Pedido OK"
    />
    <div className="vSpace" />
    Te has registrado con éxito. ¡Gracias por confiar en nosotros!
    <div className="vSpace" />
    Nombre de usuario: {form.userName}
    <br />
    <div className="vSpace" />
    Correo electrónico: {form.email}
  </div>

  )}
  </div>)
}

export default RegisterForm