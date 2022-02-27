import React, { useState } from "react";


const INITIAL_STATE = {
    diners: "",
    date: "",
    hour: "",
    name: "",
    surnames: "",
    phone: "",
    email: "",
    allergies:"",
    request:"",
    newsletter:"",
  };


const Reservas = () => {

    const [state, setState] = useState(INITIAL_STATE);

    const submitForm = (ev) => {
        ev.preventDefault();
    };

    const handleInput = (ev) => {
        const { name, value } = ev.target;
        setState({ ...state, [name]: value });
        console.log(state);
    };

    return (
        <div>
        Reservas
        <form onSubmit={submitForm}>
                <fieldset>
                    <label>
                        <p>Personas</p>
                        <input type="text" name="diners" value={state.diners} onChange={handleInput} />
                    </label>

                    <label>
                        <p>Fecha</p>
                        <input type="text" name="date" value={state.date} onChange={handleInput} />
                    </label>

                    <label>
                        <p>Hora</p>
                        <input type="text" name="hour" value={state.hour} onChange={handleInput} />
                    </label>

                    <label>
                        <p>Nombre</p>
                        <input type="text" name="name" value={state.name} onChange={handleInput} />
                    </label>
                    <label>
                        <p>Apellidos</p>
                        <input type="text" name="surnames" value={state.surnames} onChange={handleInput} />
                    </label>
                    <label>
                        <p>Telefono</p>
                        <input type="text" name="phone" value={state.phone} onChange={handleInput} />
                    </label>                                        
                    <label>
                        <p>Email</p>
                        <input type="text" name="email" value={state.email} onChange={handleInput} />
                    </label>
                    <label>
                        <p>Alergias</p>
                        <input type="text" name="allergies" value={state.allergies} onChange={handleInput} />
                    </label>        

                    <label>
                        <p>Solicitud particular</p>
                        <input type="text" name="request" value={state.request} onChange={handleInput} />
                    </label>    
                    <label>
                        <p>newsletter</p>
                        <input type="text" name="newsletter" value={state.newsletter} onChange={handleInput} />
                    </label>                                                        

                    <div>
                        <button type="submit">Guardar Perfil</button>
                    </div>
                </fieldset>
            </form>
        </div>
    );
}

export default Reservas;
