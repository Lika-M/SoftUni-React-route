import {Link} from 'react-router-dom'

export default function PetCard ({
    pet
}){

    return (
      <>
        <li className="otherPet">
        <h3>Name: {pet.name}</h3>
        <p>Category: {pet.category}</p>
        <p className="img"><img src={pet.imgUrl} /></p>
        <p className="description">{pet.description}</p>
        <div className="pet-info">
          {/* <Link to="#"><button className="button"><i className="fas fa-heart"></i> Pet</button></Link> */}
          <Link to={`/details/${pet._id}`}><button className="button">Details</button></Link>
          <i className="fas fa-heart"></i> <span>Likes: {pet.likes}</span>
        </div>
      </li>
       <li class="otherPet">
       <h3>Name: Gosho</h3>
       <p>Category: Cat</p>
       <p class="img"><img src="https://pics.clipartpng.com/Cat_PNG_Clip_Art-2580.png"/></p>
       <p class="description">This is not my cat Gosho</p>
       <div class="pet-info">
           <a href="#"><button class="button"><i class="fas fa-heart"></i> Pet</button></a>
           <a href="#"><button class="button">Details</button></a>
           <i class="fas fa-heart"></i> <span> 2</span>
       </div>
   </li>
   </>
    )
}