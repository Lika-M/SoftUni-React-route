import { Link } from 'react-router-dom'

export default function PetCard({
  name, 
  _id,
  category,
  imageUrl,
  description,
  likes

}) {

  return (
    <>
      <li className="otherPet">
        <h3>Name: {name}</h3>
        <p>Category: {category}</p>
        <p className="img"><img src={imageUrl} /></p>
        <p className="description">{description}</p>
        <div className="pet-info">
          {/* <Link to="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></Link> */}
          <Link to={`/details/${_id}`}><button className="button">Details</button></Link>
          <i className="fas fa-heart"></i> <span>Likes: {likes}</span>
        </div>
      </li>
  
    </>
  )
}