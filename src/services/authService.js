export async function login(email, password) {
    const response = await fetch('http://localhost:3030/users/login', {
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

export function logout() {
    localStorage.removeItem('username');
}

export function getUserData() {
    const username = localStorage.getItem('username');
    return username;
}

export function isAuthenticated() {
    return Boolean(getUserData());
}




