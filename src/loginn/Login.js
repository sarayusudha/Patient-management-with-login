import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './login.css';
import Main from "./Main";
import Footer from "../layout/Footer";
import validation from '../Validation';
function Login() {
  let navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    pass: '',
  })
  const [errors, setError] = useState({})
  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError(validation(values));
    if (errors.name === 'Confirm' || errors.pass === 'Confirm') {
      navigate("/app")
    }

  }
  return (

    <div>
      
      <Main />

      <form class="login" onSubmit={handleSubmit}>
        <div className="containers">

          <div class="login__field">
            <i class="login__icon"></i>
            <input type="text" class="login__input" placeholder="User name / Email" value={values.name} name="name" onChange={handleChange} />
            {errors.name && <p style={{ color: "white", fontSize: "13px" }}>{errors.name}</p>}

            <i class="login__icon fas fa-lock"></i>
            <input type="password" class="login__input1" placeholder="Password" value={values.pass} name="pass" onChange={handleChange} />
            {errors.pass && <p style={{ color: "white", fontSize: "13px" }}>{errors.pass}</p>}

          </div>



          <button class="button login__submit" type="submit">
            <span class="button__text">Log In </span>
            <i class="button__icon fas fa-chevron-right"></i>
          </button>




        </div>
      </form>
      <Footer />
    </div>

  )
}
export default Login;