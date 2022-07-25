import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as petService from '../../../services/PetService.js'
import { AuthContext } from '../../../contexts/AuthContext.js';
import './Edit.css'

export default function Edit() {
  const {user} =useContext(AuthContext);
  const navigate = useNavigate();

  const onEdit = (ev) => {
    ev.preventDefault();

  //   const formData = new FormData(ev.currentTarget);
  //   const pet = Object.fromEntries(formData);

  //   //validation without controlled form
  //   const isEmptyField = Object.values(pet).some(x => x==='');

  //   if (isEmptyField){
  //     return alert ('All fields are required');
  //   }

  //   petService.edit({
  //    ...pet,
  //     likes: []
  //   }, user.accessToken)
  //     .then(result => {
  //       navigate('/dashboard/all')
  //     })

  }

  return (
    <section className="edit">
      <form onSubmit={onEdit} method="post">
        <fieldset>
          <legend>Add new Pet</legend>
          <p className="field">
            <label htmlFor="name">Name</label>
            <span className="input">
              <input type="text" name="name" id="name" placeholder="Name" />
              <span className="actions"></span>
            </span>
          </p>
          <p className="field">
            <label htmlFor="description">Description</label>
            <span className="input">
              <textarea rows="4" cols="45" type="text" name="description" id="description"
                placeholder="Description"></textarea>
              <span className="actions"></span>
            </span>
          </p>
          <p className="field">
            <label htmlFor="image">Image</label>
            <span className="input">
              <input type="text" name="imageURL" id="image" placeholder="Image" />
              <span className="actions"></span>
            </span>
          </p>
          <p className="field">
            <label htmlFor="category">Category</label>
            <span className="input">
              <select type="text" name="category" id="category">
                <option value="cats">Cat</option>
                <option value="dogs">Dog</option>
                <option value="parrots">Parrot</option>
                <option value="reptiles">Reptile</option>
                <option value="other">Other</option>
              </select>
              <span className="actions"></span>
            </span>
          </p>
          <input className="button submit" type="submit" value="Edit Pet" />
        </fieldset>
      </form>
    </section>
  )
}