export function login(username) {
    localStorage.setItem('username', username);
}

export async function logout() {
    localStorage.removeItem('username');
}

export function getUserData() {
    const username = localStorage.getItem('username');
    return username;
}

export function isAuthenticated (){
    return Boolean(getUserData());
}




