import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate} from "react-router-dom";
import { UserContext } from "src/context/UserContext";
import axios from "axios";

const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [iniciadaSesion, setIniciadaSesion] = useState(false)

  const { usuario, setUsuario } = useContext(UserContext);

  const { state } = useLocation();

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   props.loginUser( state ? state.prevRoute : null);
  //   setErrors('')
  //   axios.post('/login', {email:email,password:password})
  //   .then(res=> {
  //      localStorage.setItem('jwtToken', res.data.token)
  //      axios.defaults.headers.common['Authorization'] =
  //        'Bearer'+res.data.token
  //      setUsuario(usuario)
  //   })
  //   .catch(err=>{
  //      if(err.response){
  //        if(err.response.status===401) setErrors('Invalid credentials')
  //        else setErrors('Please try again.')
  //   }
  //      console.log(err)
  //   })
  // }

  let handleSubmit = async (e) => {
    e.preventDefault();
    props.loginUser(state ? state.prevRoute : null);

    try {
      let response = await fetch("http://localhost:3001/api/users/signin/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      let responseJson = await response.json();
      console.log(responseJson);



      if (response.status === 200) {
        setMessage("Sesión iniciada");
        localStorage.setItem("jwtToken", response.data.token);
        console.log(response);
        setUsuario(responseJson.data.id);
        localStorage.setItem("user", JSON.stringify(responseJson));
        //setUsuario(usuario)
        setIniciadaSesion(true);
      } else {
        setMessage("Correo electrónico o contraseña incorrectos");
      }


    } catch (err) {
      console.log(err);
    }


    // setIniciadaSesion(true);
    //         navigate('/admmain')
    //         // window.Location.href('/admmain')
  };

useEffect(() => {

  // console.log(iniciadaSesion);

  if (iniciadaSesion === true){ navigate('/admmain')}
  // window.Location.href('/admmain')

}, [iniciadaSesion, navigate])

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="email"
          placeholder="Email *"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <input
          type="password"
          name="password"
          placeholder="Contraseña *"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      <div>
        <button className="standardButton" type="submit">
          Iniciar Sesión
        </button>
      </div>

      {message && <div style={{ color: "tomato" }}>{message}</div>}
    </form>
  );
};

export default LoginForm;
