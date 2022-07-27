const baseURL = 'http://localhost:3030/data';

export async function getAll() {
    const response = await fetch(`${baseURL}/pets`);
    const pets = await response.json();
    const result = Object.values(pets)
    return result;
}

export async function getItemById(id) {
    const response = await fetch(`${baseURL}/pets/${id}`);
    const result = await response.json();
    return result;
}

export async function create(data, token) {
    const response = await fetch(`${baseURL}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    console.log(result);
    return result;
}

export async function edit(data, token, id) {
    const response = await fetch(`${baseURL}/pets/${id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(data)
    });

    const result = await response.json();
    return result;
}

export async function remove(id, token) {
    const response = await fetch(`${baseURL}/pets/${id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    });
    return await response.json();
}

