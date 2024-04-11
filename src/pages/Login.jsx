import "./styles/Login.css";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import UserLogged from "../components/LoginPage/UserLogged";


const Login = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const { loginUser } = useAuth();

  const submit = data => {

    loginUser(data);
    reset({
      email: '',
      password: '',
    })

  }

  if (localStorage.getItem('token')) {
    return <UserLogged setUser={setUser} user={user} />
  }

  return (
    <div className="login-container">

      <div className="login-content">
        <form onSubmit={handleSubmit(submit)}>

          <div className="content-login__title">
              <span className="login__icon"><i className='bx bxs-user-circle'></i></span>
              <h2 className="login__title">Login</h2>
          </div>

          <div className="input-section">

            <div className="input-content">
            <i class='bx bx-user'></i>
              <input className="login__input"
                type="email"
                placeholder="Correo"
                {...register("email", { required: "El correo es requerido" })}

              />

              {errors.email && <span className="msj-err">{errors.email.message}</span>}

            </div>

            <div className="input-content">
            
            <i class='bx bx-dialpad-alt'></i>
              <input className="login__input"
                type="password"
                placeholder="Contraseña"
                {...register("password", { required: "La contraseña es requerida" })}

              />

              {errors.password && <span className="msj-err"> {errors.password.message}</span>}

            </div>

          </div>

          <button className="login__btn">Accept</button>

        </form>

      </div>
    </div>
  );
};

export default Login;
