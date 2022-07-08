export default function PetCard ({
    pet
}){

    return (
        <li className="otherPet">
        <h3>Name: {pet.name}</h3>
        <p>Category: {pet.category}</p>
        <p className="img"><img src={pet.imgUrl} /></p>
        <p className="description">{pet.description}</p>
        <div className="pet-info">
          <a href="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></a>
          <a href="#"><button className="button">Details</button></a>
          <i className="fas fa-heart"></i> <span>{pet.likes}</span>
        </div>
      </li>
    )
}