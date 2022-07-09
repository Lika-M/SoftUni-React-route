import PetCard from "./PetCard/PetCard.js";
import { PetService } from "../../../../services/PetService.js";
import { useState, useEffect } from 'react';

export default function PetList() {

    const [pets, setPets] = useState([]);
    useEffect(() => {
      PetService()
        .then(result => {
          setPets(result);
        })
    }, [])

    return (
        
            <ul className="other-pets-list">
                {pets.length > 0
                ?  pets.map(x => <PetCard key={x._id} pet={x} />)
            : <p className="no-pets">No pets in Database</p>}
               
            </ul>
    
    )
}