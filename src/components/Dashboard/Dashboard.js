import { Routes, Link, useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';

import * as  petService from "../../services/dataService.js"
import PetList from './PetList/PetList.js';


// import { ReactComponent as Logo } from '../../../logo.svg';
import './logo.css'


export default function Dashboard() {
  const [pets, setPets] = useState({pets: [], currentCategory: 'all'});
  const {category} = useParams();
  console.log(category);

  useEffect(() => {
    petService.getAll(category)
      .then(result => {
        setPets({pets: result, currentCategory: category});
      })
  }, [category]);


  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <nav className="navbar">
        <ul>
          <li><Link to="/dashboard/all">All</Link></li>
          <li><Link to="/dashboard/cats">Cats</Link></li>
          <li><Link to="/dashboard/dogs">Dogs</Link></li>
          <li><Link to="/dashboard/parrots">Parrots</Link></li>
          <li><Link to="/dashboard/reptiles">Reptiles</Link></li>
          <li><Link to="/dashboard/other">Other</Link></li>
        </ul>
        </nav>
     <PetList pets={pets.pets}/>
  
      <Routes>
        {/* <Route path='/' element={<PetList pets={pets}/>} /> */}
        {/* <Route path='cats' element={<p>All cats here...</p>} />
        <Route path='dogs' element={<p>All dogs here...</p>} /> */}
      </Routes>
    </section>
  )
}