import { Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
import useLocaleStorage from './hooks/useLocalStorage.js';

import { AuthContext } from './contexts/AuthContext.js';
import Create from "./components/Dashboard/Create/Create.js";
import Edit from "./components/Dashboard/Edit/Edit.js";
import Dashboard from "./components/Dashboard/Dashboard.js";
import Header from "./components/Header/Header.js";
import Login from "./components/Login/Login.js"
import Logout from "./components/Logout/Logout.js";
import Register from "./components/Register/Register.js";
import Details from "./components/Dashboard/Details/Details.js";
import Home from './components/Home/Home.js';


const initialUserState = {
  email: '',
  _id: '',
  accessToken: ''
}

export default function App() {

  // const [user, setUser] = useState(initialUserState);

  // with custom hook to implement persistance in case of refresh
  const [user, setUser] = useLocaleStorage('user',
    initialUserState);


  function userLogin(userData) {
    setUser(userData);
  }

  function userLogout() {
    setUser(initialUserState);
  }

  return (
    <AuthContext.Provider value={{ user, userLogin, userLogout }}>
      <div id="container">
        <Header />
        <main id="site-content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/dashboard/:category" element={<Dashboard whatEver="something" />} />
            <Route path="/dashboard/*" element={<Dashboard whatEver="something" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="/create" element={<Create />} />
            <Route path="/details/:petId" element={<Details />} />
            <Route path="/edit/:petId" element={<Edit />} />

          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

