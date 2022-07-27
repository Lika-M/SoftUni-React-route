import { Routes, Route, Link} from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as petService from "../../services/PetService.js";
import PetList from './PetList/PetList.js';


// import { ReactComponent as Logo } from '../../../logo.svg';
import './logo.css'

export default function Dashboard() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    petService.getAll()
      .then(result => {
        setPets(result);
      })
  }, []);
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <nav className="navbar">
        <ul>
          <li><Link to="/">All</Link></li>
          {/* <li><Link to="cats">Cats</Link></li>
          <li><Link to="dogs">Dogs</Link></li>
          <li><Link to="parrots">Parrots</Link></li>
          <li><Link to="#">Reptiles</Link></li>
          <li><Link to="#">Other</Link></li> */}
        </ul>
      </nav>
      {/* <Logo className="logo" /> */}
      <Routes>
        <Route path='/' element={<PetList pets={pets}/>} />
        {/* <Route path='cats' element={<p>All cats here...</p>} />
        <Route path='dogs' element={<p>All dogs here...</p>} /> */}
      </Routes>
    </section>
  )
}