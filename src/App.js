import Create from "./components/Main/Create/Create.js";
import Dashboard from "./components/Main/Dashboard/Dashboard.js";
import DetailsOtherPet from "./components/Main/DetailsOtherPet/DetailsOtherPet.js";
import Header from "./components/Header/Header.js";
import Login from "./components/Main/Login/Login.js"
import MyPet from "./components/Main/MyPet/MyPet.js";
import MyPets from "./components/Main/MyPets/MyPets.js";
import OtherPet from "./components/Main/OtherPet/OtherPet.js";
import Register from "./components/Main/Register/Register.js";
import DeletePet from "./components/Main/DeletePet/DeletePet.js"
import DetailsMyPet from "./components/Main/DetailsMyPet/DetailsMyPet.js";

import { Routes, Route } from 'react-router-dom';
import * as authService from '../src/services/authService.js';
import { useState, useEffect } from 'react';


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

  return (

    <div id="container">
      {/* all props of object as attributes */}
      <Header {... userInfo}/> 
      <main id="site-content">
        {/* 
        <section className="basic">
          <h1> Welcome to pet my pet!</h1>
        </section> */}

        <Routes>
          <Route path="/" element={<Dashboard whatEver="something" />} />
          <Route path="/login" element={<Login onLogin={onLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-pets" element={<MyPets />} />
          <Route path="/create" element={<Create />} />
          {/* <Route path="/myPet" element={<MyPet />} />
          <Route path="/otherPet" element={<OtherPet />} />
          <Route path="/deletePet" element={<DeletePet />} />
          <Route path="/detailsMyPet" element={<DetailsMyPet />} />
          <Route path="/detailsOtherPet" element={<DetailsOtherPet />} /> */}

        </Routes>

      </main>

    </div>
  );
}

export default App;
