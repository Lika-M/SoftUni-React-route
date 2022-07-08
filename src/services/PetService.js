const baseURL = 'http://localhost:3030/jsonstore';

export async function PetService() {
    const response = await fetch(`${baseURL}/pets`)
    const pets = await response.json();
    const result = Object.values(pets)
    return result;
}