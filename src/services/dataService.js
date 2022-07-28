import * as api from './api.js';

const endpoints = {
    all: '/data/pets', 
    create: '/data/pets',
    itemById: '/data/pets/',
    edit: '/data/pets/',
    delete: '/data/pets/',
}

export async function getAll(category=''){
    if(category && category !== 'all'){
        const url=`/data/pets?category=${category}`;
        return api.get(url)
    }
    return api.get(endpoints.all)
}

export async function getItemById(id){
    return api.get(endpoints.itemById + id);
}

export async function createItem(data){
    return api.post(endpoints.create, data);
}

export async function editItem(data, id){
return api.put(endpoints.edit + id, data);
}

export async function deleteItemById(id){
    return api.delete(endpoints.itemById + id);
}

// const baseURL = 'http://localhost:3030/data';

// export async function getAll() {
//     const response = await fetch(`${baseURL}/pets`);
//     const pets = await response.json();
//     const result = Object.values(pets)
//     return result;
// }

// export async function getItemById(id) {
//     const response = await fetch(`${baseURL}/pets/${id}`);
//     const result = await response.json();
//     return result;
// }

// export async function createItem(data, token) {
//     const response = await fetch(`${baseURL}/pets`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token
//         },
//         body: JSON.stringify(data)
//     });
//     const result = await response.json();
//     console.log(result);
//     return result;
// }

// export async function editItem(data, token, id) {
//     const response = await fetch(`${baseURL}/pets/${id}`, {
//         method: 'PUT',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token
//         },
//         body: JSON.stringify(data)
//     });

//     const result = await response.json();
//     return result;
// }

// export async function deleteItemById(id, token) {
//     const response = await fetch(`${baseURL}/pets/${id}`, {
//         method: 'DELETE',
//         headers: {
//             'X-Authorization': token
//         }
//     });
//     return await response.json();
// }

