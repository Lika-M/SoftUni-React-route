
const baseURL = 'http://localhost:3030/users';



export async function login(email, password) {
    const response = await fetch(`${baseURL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    const result = await response.json();

    if (response.ok) {
        const userData = {
            _id: result._id,
            email: result.email,
            token: result.accessToken
        }
        localStorage.setItem('userData', JSON.stringify(userData));
        return result;
    } else {
        throw result.message;
    }
}

export async function register(email, password) {
    const response = await fetch(`${baseURL}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
    const result = await response.json();

    if (response.ok) {
        const userData = {
            _id: result._id,
            email: result.email,
            token: result.accessToken
        }
        localStorage.setItem('userData', JSON.stringify(userData));
        return result;
    } else {
        throw result.message;
    }
}

export async function logout (token){
    
   const response = await fetch(`${baseURL}/logout`, {
        headers: {
            'X-Authorization': token
        }
    });

    localStorage.removeItem('userData');
    return response;
  
}


export function getUserData() {
    const username = localStorage.getItem('username');
    return username;
}

// export function isAuthenticated() {
//     return Boolean(getUserData());
// }




