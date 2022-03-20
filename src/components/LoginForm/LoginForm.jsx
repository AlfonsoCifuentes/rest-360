import { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { UserContext } from 'src/context/UserContext';




const LoginForm = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  
  const {usuario, setUsuario} = useContext(UserContext)

  const { state } = useLocation();
  

    

  let handleSubmit = async (e) => {
    e.preventDefault();
    props.loginUser( state ? state.prevRoute : null);

    try{
        let response = await fetch("http://localhost:3001/vga/users/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                email: email,
                password: password
            })
        });
        let responseJson = await response.json();
        if(response.status === 200) {


            
            setMessage("Sesión iniciada");
            
            localStorage.setItem("user", JSON.stringify(responseJson))
            setUsuario(usuario)

        }else{
            setMessage("Correo electrónico o contraseña incorrectos");
        }
        
    }catch (err) {
        console.log(err);
        }
}

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Correo Electrónico</p>
        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>

      <label>
        <p>Contraseña</p>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>

      <div>

 
        <button className='standardButton' type='submit'>Iniciar Sesión</button>
    
        
      </div>

      {message && <div style={{color: 'tomato'}}>{message}</div>}
    </form>
  )
}

export default LoginForm;