import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import * as PetService from '../../../services/PetService.js';

export default function Details() {
  const [pet, setPet] = useState({});
  const { petId } = useParams();

  useEffect(() => {
    PetService.getItemById(petId)
        .then(result => {
            setPet(result);
        })
}, [])
  // useEffect(async () => {
  //   let result = PetService.getItemById(petId);
  //   setPet(result)
  // }, [])
  // console.log(pet);

  return (
    <section className="myPet">
    <h3>Name: {pet.name}</h3>
    <p>Category: {pet.category}</p>
    <p className="img"><img src={pet.imgUrl} /></p>
    <p className="description">{pet.description}</p>
    <div className="pet-info">
      <a href="#"><button className="button">Edit</button></a>
      <a href="#"><button className="button">Delete</button></a>
   
    </div>
  </section>
  )
}