import { Routes, Route } from 'react-router-dom';
import * as authService from '../src/services/authService.js';
import { useState, useEffect } from 'react';
import Logout from "./components/Main/Logout/Logout.js";

import Create from "./components/Main/Create/Create.js";
import Dashboard from "./components/Main/Dashboard/Dashboard.js";
import Header from "./components/Header/Header.js";
import Login from "./components/Main/Login/Login.js"
import Register from "./components/Main/Register/Register.js";
import Details from "./components/Main/Dashboard/Details/Details.js";

function App() {

  const [userInfo, setUserInfo] = useState({ username: '', isAuthenticated: false });
  useEffect(() => {

    let user = authService.getUserData();

    setUserInfo({
      user,
      isAuthenticated: Boolean(user)
    })

  }, []);

  function onLogin(username) {
    setUserInfo({
      user: username,
      isAuthenticated: true
    })
  }

  function onLogout() {
    setUserInfo({
      user: null,
      isAuthenticated: false
    })
  }

  return (

    <div id="container">
      {/* all props of object as attributes */}
      <Header {...userInfo} />
      <main id="site-content">

        <section className="basic">
          <h1> Welcome to pet my pet!</h1>
        </section>

        <Routes>
          <Route path="/dashboard/*" element={<Dashboard whatEver="something" />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/logout" element={<Logout onLogout={onLogout} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create" element={<Create />} />
          <Route path="/details/:petId" element={<Details />} />

        </Routes>

      </main>

    </div>
  );
}

export default App;
