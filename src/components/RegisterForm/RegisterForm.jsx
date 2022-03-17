import React, {useState} from 'react'
import { useLocation } from 'react-router-dom';

const INITIAL_STATE = {
    userName: "",
    firstName:"",
    lastName:"",
    email: "",
    password: "",
    phone:"",
    dateOfBirth:"",
    avatar: ""
  };

const RegisterForm = (props) => {

const { state } = useLocation();
  const [formulario, setFormulario] = useState(INITIAL_STATE);

  const submitForm = (ev) => {
    ev.preventDefault();
    props.loginUser(formulario, state ? state.prevRoute : null);
    setFormulario(INITIAL_STATE);
  }

    const changeInput = (ev) => {
    const { name, value } = ev.target;

    setFormulario({ ...formulario, [name]: value });
  };

  

  return (
    <form onSubmit={submitForm}>

    <label>
        <p>Nombre de usuario</p>
        <input type="text" name="userName" onChange={changeInput} value={formulario.email} />
      </label>

      <label>
        <p>Nombre</p>
        <input type="password" name="firstName" onChange={changeInput} value={formulario.password} />
      </label>

      <label>
        <p>Apellidos</p>
        <input type="password" name="lastName" onChange={changeInput} value={formulario.password} />
      </label>

      <label>
        <p>Correo Electrónico</p>
        <input type="text" name="email" onChange={changeInput} value={formulario.email} />
      </label>

      <label>
        <p>Contraseña</p>
        <input type="password" name="password" onChange={changeInput} value={formulario.password} />
      </label>

      <label>
        <p>Teléfono</p>
        <input type="number" name="password" onChange={changeInput} value={formulario.password} />
      </label>

      <label>
        <p>Fecha de nacimiento</p>
        <input type="date" name="dateOfBirth" onChange={changeInput} value={formulario.password} />
      </label>

      <div>
        <button type='submit'>Registrarme</button>
      </div>

      {props.loginError && <div style={{color: 'tomato'}}>{props.loginError}</div>}
    </form>
  )
}

export default RegisterForm