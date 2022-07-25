import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import * as petService from '../../../../services/PetService.js';
import { AuthContext } from '../../../../contexts/AuthContext.js';


export default function Details() {

  const [pet, setPet] = useState({});
  const { petId } = useParams();
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    petService.getItemById(petId)
      .then(result => {
        setPet(result);
      })
  }, [petId]);

  const isOwner = user._id === pet._ownerId;
  let buttons = null;

  if (user._id) {
    if (isOwner) {
      buttons = (
        <>
          <a href={`edit/${petId}`}><button className="button">Edit</button></a>
          <span><button onClick={onDelete} className="button">Delete</button></span>
        </>
      )
    } else {
      buttons = (<Link to="#"><button className="button">Like</button></Link>)
    }
  };

  function onDelete(ev) {
    petService.remove(petId, user.accessToken)
      .then(result => {
        navigate('/dashboard')
      })
  };

  return (
    <section className="myPet">
      <h3>Name: {pet.name}</h3>
      <p>Category: {pet.category}</p>
      <p className="img"><img src={pet.imageUrl} alt={pet.name} /></p>
      <p className="description">{pet.description}</p>
      <div className="pet-info">
        {buttons}
        <i className="fas fa-heart"></i> <span>Like: {pet.likes?.length}</span>
      </div>
    </section>

  )
}