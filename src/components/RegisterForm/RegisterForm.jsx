import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Navigate } from "react-router-dom";

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

    const goToLogin = () => {
     return <Navigate to="/login" state={{prevRoute: window.location.pathname}} />
    }

    let handleSubmit = async (e) => {
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

                setUserName();
                setFirstName();
                setLastName();
                setEmail();
                setPassword();
                setPhone();
                setDateOfBirth();
                
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
    <form onSubmit={handleSubmit}>

      <label>
        <p>Nombre de usuario (apodo)</p>
        <input type="text" name="userName" onChange={(e) => setUserName(e.target.value)} value={userName} />
      </label>

      
      <label>
        <p>Nombre</p>
        <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      </label>

           
      <label>
        <p>Apellidos</p>
        <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} value={lastName} />
      </label>

      <label>
        <p>Correo electrónico</p>
        <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      </label>

      <label>
        <p>Contraseña</p>
        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>

      <label>
        <p>Teléfono</p>
        <input type="number" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
      </label>

      <label>
        <p>Fecha de nacimiento</p>
        <input type="date" format="yyyy-mm-dd" name="dateOfBirth"  onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth} />
      </label>




      <div>
        <button className='standardButton' type='submit'>Registrarme</button>
      </div>

      {message && <div style={{color: 'tomato'}}>{message}</div>}
    </form>
  )
}

export default RegisterForm