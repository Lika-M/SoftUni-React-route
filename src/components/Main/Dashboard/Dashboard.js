import PetCard from "./PetCard/PetCard.js";
import { PetService } from "../../../services/PetService.js";
import { useState, useEffect } from 'react';

export default function Dashboard() {

  const [pets, setPets] = useState([]);
  useEffect( () => {
    PetService()
    .then(result => {
      setPets(result);
    })
  }, [])

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <nav className="navbar">
        <ul>
          <li><a href="#">All</a></li>
          <li><a href="#">Cats</a></li>
          <li><a href="#">Dogs</a></li>
          <li><a href="#">Parrots</a></li>
          <li><a href="#">Reptiles</a></li>
          <li><a href="#">Other</a></li>
        </ul>
      </nav>
      <ul className="other-pets-list">
        {pets.map(x => <PetCard key={x._id} pet={x} />)}
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
      </ul>
    </section>
  )
}