export function login(username) {
    localStorage.setItem('username', username);
}

export function getUserData() {
    const username = localStorage.getItem('username');
    return username;
}

export async function logout(username) {
    localStorage.removeItem('username');
}



