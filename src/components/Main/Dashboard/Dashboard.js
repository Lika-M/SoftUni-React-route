import { Routes, Route, Link } from 'react-router-dom';
import PetList from './PetList/PetList.js';

// import { ReactComponent as Logo } from '../../../logo.svg';
import './logo.css'

export default function Dashboard() {

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <nav className="navbar">
        <ul>
          <li><Link to="all">All</Link></li>
          <li><Link to="cats">Cats</Link></li>
          <li><Link to="dogs">Dogs</Link></li>
          {/* <li><Link to="#">Parrots</Link></li>
          <li><Link to="#">Reptiles</Link></li>
          <li><Link to="#">Other</Link></li> */}
        </ul>
      </nav>
      {/* <Logo className="logo" /> */}
      <Routes>
        <Route path='/' element={<PetList />} />
        <Route path='all' element={<p>All pets here...</p>} />
        <Route path='cats' element={<p>All cats here...</p>} />
        <Route path='dogs' element={<p>All dogs here...</p>} />
      </Routes>

      {/* <li className="otherPet">
          <h3>Name: Gosho</h3>
          <p>Category: Cat</p>
          <p className="img"><img src="https://pics.clipartpng.com/Dalmatian_Dog_PNG_Clip_Art-2581.png" /></p>
          <p className="description">This is not my cat Gosho</p>
          <div className="pet-info">
            <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
            <a href="#"><button className="button">Details</button></a>
            <i className="fas fa-heart"></i> <span> 2</span>
          </div>

        </li>
        <li className="otherPet">
          <h3>Name: Kiro</h3>
          <p>Category: Dog</p>
          <p className="img"><img src="https://pics.clipartpng.com/Chipmunk_PNG_Clip_Art-2544.png" /></p>
          <p className="description">This is my dog Kiro</p>
          <div className="pet-info">
            <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
            <a href="#"><button className="button">Details</button></a>
            <i className="fas fa-heart"></i> <span> 4</span>
          </div>
        </li> */}

    </section>
  )
}