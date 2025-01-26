import {pathToApi} from "./pathToAPI";


export const fetchLogin = async (data) => {
    const {username, password} = data
    const response = await fetch(pathToApi + 'auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        mode: "cors",
        body: JSON.stringify({username, password}),
    });

    if (!response.ok) {
        throw new Error(`Login failed: ${response.status}`);
    }

    const {token, type, role} = await response.json();
    sessionStorage.setItem('jwtToken', token);
    return {token, type, role};
};


export const logoutHandle = () => {
    sessionStorage.removeItem('jwtToken');
};
