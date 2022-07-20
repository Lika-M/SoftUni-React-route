import { Link, NavLink } from 'react-router-dom';

export default function Header({
  user,
  isAuthenticated
}) {

  const userNav = (
    <div className="second-bar">
      <ul>
        <li>Welcome, {user}!</li>
        <li><NavLink to="/logout"><i className="fas fa-sign-out-alt"></i> Logout</NavLink></li>
      </ul>
    </div>
  );

  const guestNav = (
    <section className="navbar-anonymous">
      <ul>
        <li><NavLink to="/register"><i className="fas fa-user-plus"></i> Register</NavLink></li>
        <li><NavLink to="/login"><i className="fas fa-sign-in-alt"></i> Login</NavLink></li>
      </ul>
    </section>
  );

  return (
    <header id="site-header">
      <nav className="navbar">
        <section className="navbar-dashboard">
          <div className="first-bar">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink className="button" to="/my-pets">My Pets</NavLink>
            <NavLink className="button" to="/create">Add Pet</NavLink>
          </div>

        {isAuthenticated
          ? userNav
          : guestNav}
        </section>
      </nav>
    </header>
  )
}