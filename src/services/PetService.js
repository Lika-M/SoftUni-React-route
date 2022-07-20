const baseURL = 'http://localhost:3030/jsonstore';

export async function getAll() {
    const response = await fetch(`${baseURL}/pets`);
    const pets = await response.json();
    const result = Object.values(pets)
    return result;
}

export async function create (data){
    const response = await fetch(`${baseURL}/pets`, {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}

export async function getItemById(id) {
    const response = await fetch(`${baseURL}/pets/${id}`);
    const result = await response.json();
    return result;
}