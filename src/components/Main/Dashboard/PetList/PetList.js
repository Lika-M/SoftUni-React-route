import { useState, useEffect } from 'react';
import PetCard from "./PetCard/PetCard.js";
import * as petService from "../../../../services/PetService.js";

export default function PetList() {

  const [pets, setPets] = useState([]);
  useEffect(() => {
    petService.getAll()
      .then(result => {
        setPets(result);
      })
  }, [])

  return (

    <ul className="other-pets-list">
      {pets.length > 0
        ? pets.map(x => <PetCard key={x._id} {...x} />)
        : <p className="no-pets">No pets in Database</p>}

    </ul>

  )
}