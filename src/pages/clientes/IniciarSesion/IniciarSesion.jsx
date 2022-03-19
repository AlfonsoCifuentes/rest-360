import React, { useState, useContext, useEffect } from 'react'
import LoginForm from 'src/components/LoginForm/LoginForm'
import { UserContext } from 'src/context/UserContext'
import { useNavigate } from 'react-router-dom'
import StandardHeader from 'src/components/StandardHeader/StandardHeader'

const IniciarSesion = () => {

   //Props para el componente de header genérico: StandardHeader
   const bgImage = "https://images2.imgbox.com/d4/be/6FUoKJPx_o.jpg";      

  const {setUsuario} = useContext(UserContext);
  const navigate = useNavigate();  
  const [usuariosRegistrados, setUsuariosRegistrados] = useState([]);
  const [loginError, setLoginError] = useState('');

    //Fetch de los usuarios registrados al servidor
    useEffect(() => {
        fetch("http://localhost:3001/vga/users")
        .then ((response) => response.json())
        .then((data) => setUsuariosRegistrados(data))
      },[]);
 

      const loginUser = (formData, prevRoute) => {
        const existsUser = usuariosRegistrados.find(element => element.password === formData.password && element.email === formData.email);
    
        if (existsUser) {
          setUsuario(existsUser);
          setLoginError('');
          navigate(prevRoute || '/');
        } else {
          setUsuario(false);
          setLoginError('No existe el usuario o la contraseña no coincide');
        }
      };
    

  return (
    <div className='mainDiv'>
        <StandardHeader bgImage={bgImage} />
        <h1>Iniciar Sesión</h1>
        <p className='sectionParagraph'>
            Por favor, introduzca su correo electrónico y contraseña para iniciar sesión
        </p>
        <LoginForm  loginUser={loginUser} loginError={loginError} />
    </div>
  )
}

export default IniciarSesion