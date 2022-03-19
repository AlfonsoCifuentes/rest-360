import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const INITIAL_STATE = {
  email: "",
  password: "",
};

const LoginForm = (props) => {
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
        <p>Correo Electrónico</p>
        <input type="text" name="email" onChange={changeInput} value={formulario.email} />
      </label>

      <label>
        <p>Contraseña</p>
        <input type="password" name="password" onChange={changeInput} value={formulario.password} />
      </label>

      <div>
        <button className='standardButton' type='submit'>Iniciar Sesión</button>
      </div>

      {props.loginError && <div style={{color: 'tomato'}}>{props.loginError}</div>}
    </form>
  )
}

export default LoginForm;