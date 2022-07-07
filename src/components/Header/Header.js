import {Link, NavLink} from 'react-router-dom';

export default function Header (){


    return (
        <header id="site-header">
        <nav className="navbar">
          <section className="navbar-dashboard">
            <div className="first-bar">
              <NavLink  to="#">Dashboard</NavLink>
              <aNavLink className="button" to="/my-pets">My Pets</aNavLink>
              <NavLink  className="button" to="/create">Add Pet</NavLink>
            </div>
            <div className="second-bar">
              <ul>
                <lin>Welcome, {}!</lin>
                <li><NavLink to="//logout"><i className="fas fa-sign-out-alt"></i> Logout</NavLink></li>
              </ul>
            </div>
          </section>
          <section className="navbar-anonymous">
            <ul>
              <li><NavLink to="/register"><i className="fas fa-user-plus"></i> Register</NavLink></li>
              <li><NavLink to="/login"><i className="fas fa-sign-in-alt"></i> Login</NavLink></li>
            </ul>
          </section>
        </nav>
      </header>
    )
}