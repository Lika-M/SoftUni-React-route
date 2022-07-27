import PetCard from "./PetCard/PetCard.js";

export default function PetList({pets}) {


  return (

    <ul className="other-pets-list">
      {pets.length > 0
        ? pets.map(x => <PetCard key={x._id} {...x} />)
        : <p className="no-pets">No pets in Database</p>}

    </ul>

  )
}