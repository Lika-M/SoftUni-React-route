import * as petService from '../../../services/PetService.js'
import { useNavigate } from 'react-router-dom';

export default function Create() {

  const navigate = useNavigate();

  const onCreate = (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const name = formData.get('name');
    const category = formData.get('category');
    const description = formData.get('description');
    const imgUrl = formData.get('imageURL');

    petService.create({
      name,
      description,
      imgUrl,
      category,
      likes: 0
    })
      .then(result => {
        navigate('/dashboard')
      })

  }

  return (
    <section className="create">
      <form onSubmit={onCreate} method="post">
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
              <select type="text" name="category">
                <option>Cat</option>
                <option>Dog</option>
                <option>Parrot</option>
                <option>Reptile</option>
                <option>Other</option>
              </select>
              <span className="actions"></span>
            </span>
          </p>
          <input className="button submit" type="submit" value="Add Pet" />
        </fieldset>
      </form>
    </section>
  )
}