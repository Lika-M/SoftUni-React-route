
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as authService from '../../../services/authService.js'
import { AuthContext } from '../../../contexts/AuthContext.js';


export default function Register() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  function onRegisterNav(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('repeat-password');

    // TODO control form and validation

    if(password !== repass){
      return
    }

    authService.register(email, password)
      .then(userData => {
        login(userData);

        navigate('/dashboard')
      });

    // TODO catch errors
  }
  return (

    <section className="register">
      <form onSubmit={onRegisterNav} method="post">
        <fieldset>
          <legend>Register</legend>
          <p className="field">
            <label htmlFor="email">Email</label>
            <span className="input">
              <input type="text" name="email" id="email" placeholder="Email" />
              <span className="actions"></span>
              <i className="fas fa-user"></i>
            </span>
          </p>
          <p className="field">
            <label htmlFor="password">Password</label>
            <span className="input">
              <input type="password" name="password" id="password" placeholder="Password" />
              <span className="actions"></span>
              <i className="fas fa-key"></i>
            </span>
          </p>
          <p className="field">
            <label htmlFor="repass">Repeat Password</label>
            <span className="input">
              <input type="password" name="repeat-password" id="repass" placeholder="Repeat Password" />
              <span className="actions"></span>
              <i className="fas fa-key"></i>
            </span>
          </p>
          <input className="button submit" type="submit" value="Register" />
        </fieldset>
      </form>
    </section>
  )
}