import React, {useState} from 'react'

const RegisterForm = () => {

    const [userName, setUserName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(0);
    const [phone, setPhone] = useState(0);
    const [dateOfBirth, setDateOfBirth] = useState(0);
    const [avatar, setAvatar] = useState("");
    const [idUser, setIdUser] = useState(0);

    const [message, setMessage] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        try{
            let response = await fetch("http://localhost:3001/vga/users", {
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
                    avatar: avatar
                })
            });
            let responseJson = await response.json();
            if(response.status === 200) {
                setIdUser();
                setUserName();
                setFirstName();
                setLastName();
                setEmail();
                setPassword();
                setPhone();
                setDateOfBirth();
                setAvatar();
                setMessage("Usuario creado con éxito");
                
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
        <p>Id Usuario</p>
        <input type="number" name="idUser" onChange={(e) => setIdUser(e.target.value)} value={idUser} />
      </label>

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
        <input type="number" name="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      </label>

      <label>
        <p>Teléfono</p>
        <input type="number" name="phone" onChange={(e) => setPhone(e.target.value)} value={phone} />
      </label>

      <label>
        <p>Fecha de nacimiento</p>
        <input type="number" name="dateOfBirth" onChange={(e) => setDateOfBirth(e.target.value)} value={dateOfBirth} />
      </label>

      
      <label>
        <p>Avatar</p>
        <input type="text" name="avatar" onChange={(e) => setAvatar(e.target.value)} value={avatar} />
      </label>






      <div>
        <button className='standardButton' type='submit'>Registrarme</button>
      </div>

      {message && <div style={{color: 'tomato'}}>{message}</div>}
    </form>
  )
}

export default RegisterForm