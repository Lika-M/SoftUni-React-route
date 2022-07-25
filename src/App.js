import { Routes, Route } from 'react-router-dom';
import { useState} from 'react';

import { AuthContext } from './contexts/AuthContext.js';
import Create from "./components/Main/Create/Create.js";
import Edit from "./components/Main/Edit/Edit.js";
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
  });
  

  function login(userData) {
    setUser(userData);
  }

  function logout() {
//TODO implement
  }

  return (
    <AuthContext.Provider value={{user, login}}>
      <div id="container">
        {/* all props of object as attributes */}
        <Header />
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/dashboard/*" element={<Dashboard whatEver="something" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:petId" element={<Edit />} />
            <Route path="/details/:petId" element={<Details />} />
            <Route path="/my-pets/*" element={<MyPets />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
