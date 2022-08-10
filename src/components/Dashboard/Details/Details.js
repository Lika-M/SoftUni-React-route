import { useParams, Link, useNavigate, Routes, Route } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';

import * as petService from '../../../services/dataService.js';
import { AuthContext } from '../../../contexts/AuthContext.js';
import Edit from '../Edit/Edit.js';
import Modal from '../Modal/Modal.js';



export default function Details() {

  const { petId } = useParams();
  const { user } = useContext(AuthContext);

  const [pet, setPet] = useState({});
  const [modal, setModal] = useState({ show: false })

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
          <Link to={`/edit/${pet._id}`} ><button className="button">Edit</button></Link>

          <button onClick={onDelete} className="button">Delete</button>

        </>
      )
    } else {
      buttons = (<Link to="#"><button className="button">Like</button></Link>)
    }
  };

  function onDelete(ev) {
    setModal({ show: true });

  };

  function handleDeleteFalse() {
    setModal({ show: false })
  }

  function handleDeleteTrue() {
    if (modal.show) {
      petService.deleteItemById(petId, user.accessToken)
        .then(result => {
          navigate('/dashboard/all')
        });
    }
  }

  return (
    <section className="myPet">
      <h3>Name: {pet.name}</h3>
      <p>Category: {pet.category}</p>
      <p className="img"><img src={pet.imageUrl} alt={pet.name} /></p>
      <p className="description">{pet.description}</p>
      <div className="pet-info">
        {buttons}
        <i className="fas fa-heart"></i> <span>Like: {pet.likes?.length}</span>
      </div> {
        modal.show &&
        <Modal
          name={pet.name}
          handleDeleteTrue={handleDeleteTrue}
          handleDeleteFalse={handleDeleteFalse}
        />
      }

    </section>

  )
}