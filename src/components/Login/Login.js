import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import * as authService from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js';


export default function Login() {
  const { login } = useContext(AuthContext);

  //Controlled form and validation:
  const [error, setError] = useState('');
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
        console.log(userData)
        // login function from Context:
        login(userData);

        navigate('/');
      })
      .catch(err => {
        //TODO notification
        console.log(err)
      })
  }
  
  // Controlled form and Validation
  function onChange(ev) {
    setUserInput(state => ({
      ...state,
      [ev.target.name]: ev.target.value
    }));
  };
  // returns true or false
  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function validateEmail(ev) {
    let errorMessage = '';

    if (!isValidEmail(ev.target.value)) {
      errorMessage = 'Enter valid email.'
    }
    setError(state => ({
      ...state,
      email: errorMessage
    }))
  }
  function validatePassword(ev) {
    let errorMessage = '';

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

  return (
    <section className="login">
      <form onSubmit={onLoginNav} method="post">
        <fieldset>
          <legend>Login</legend>
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
            {error.email
              ? <p style={{ color: 'red' }}>{error.email}</p>
              : null}
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input
                type="password"
                name="password" id="password"
                placeholder="Password"
                value={userInput.password}
                onChange={onChange}
                onBlur={validatePassword}
              />
              <span className="actions"></span>
              <i className="fas fa-key"></i>
            </span>
            {error.password
              ? <p style={{ color: 'red' }}>{error.password}</p>
              : null}
          </p>
          <input className="button submit" type="submit" value="Login" />
        </fieldset>
      </form>
    </section>
  )
}