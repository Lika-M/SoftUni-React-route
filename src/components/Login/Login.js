import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as authService from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js';


export default function Login() {
  const { userLogin } = useContext(AuthContext);
  const [error, setError] = useState({
    email: '',
    password: '',
    both: ''
  });
  const [userInput, setUserInput] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const onLoginNav = (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    authService.login(email, password)
      .then((userData) => {
        userLogin(userData);
        navigate('/');
      })
      .catch(err => {
        setError(state => ({
          ...state,
          both: err
        }))
        //TODO notification
        alert(err);
      })
  }

  function onChange(ev) {
    setUserInput(state => ({
      ...state,
      [ev.target.name]: ev.target.value
    }));
  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  let errorMessage = '';

  function validateEmail(ev) {

    if (!isValidEmail(ev.target.value)) {
      errorMessage = 'Enter valid email.'
    }
    setError(state => ({
      ...state,
      email: errorMessage
    }))
  }

  function validatePassword(ev) {

    if (ev.target.value.length > 15) {
      errorMessage = 'Password must be no longer than 15 symbols.'
    } else if (ev.target.value.length < 5) {
      errorMessage = 'Password must be at least 5 symbols.'
    }
    setError(state => ({
      ...state,
      password: errorMessage
    }))
  }
  
  console.log(error)

  return (
    <section className="login">

      <form onSubmit={onLoginNav} method="post">
        <fieldset>
          <legend>{error.both
            ? <p style={{ color: 'red' }}>{error.both}</p>
            : "Login"}</legend>
          <p className="field">
            <label htmlFor="email">Email</label>
            <span className="input">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                value={userInput.email}
                onChange={onChange}
                onBlur={validateEmail}
              />
              <span className="actions"></span>
              <i className="fas fa-user"></i>
            </span>
          </p>
          {error.email
            ? <p style={{ color: 'red' }}>{error.email}</p>
            : null}
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={userInput.password}
                onChange={onChange}
                onBlur={validatePassword}
              />
              <span className="actions"></span>
              <i className="fas fa-key"></i>
            </span>
          </p>
          {error.password
            ? <p style={{ color: 'red' }}>{error.password}</p>
            : null}
          <input className="button submit" type="submit" value="Login" />

        </fieldset>
      </form>
    </section>
  )
}