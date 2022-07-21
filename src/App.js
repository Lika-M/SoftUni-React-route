import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { AuthContext } from './contexts/AuthContext.js';
import * as authService from '../src/services/authService.js';
import Create from "./components/Main/Create/Create.js";
import Dashboard from "./components/Main/Dashboard/Dashboard.js";
import Header from "./components/Header/Header.js";
import Login from "./components/Main/Login/Login.js"
import Logout from "./components/Main/Logout/Logout.js";
import Register from "./components/Main/Register/Register.js";
import Details from "./components/Main/Dashboard/Details/Details.js";
import Home from './components/Main/Home/Home.js';
import MyPets from './components/Main/MyPets/MyPets.js';

function App() {

  const [user, setUser] = useState({
    email: '',
    _id: '',
    accessToken: ''
  })

  function onLogin(userData) {
    setUser(userData);
  }

  function onLogout() {

  }

  return (
    <AuthContext.Provider value={user}>
      <div id="container">
        {/* all props of object as attributes */}
        <Header user={user.email}/>
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/dashboard/*" element={<Dashboard whatEver="something" />} />
            <Route path="/login" element={<Login onLogin={onLogin} />} />
            <Route path="/logout" element={<Logout onLogout={onLogout} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:petId" element={<Details />} />
            <Route path="/my-pets/*" element={<MyPets />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
