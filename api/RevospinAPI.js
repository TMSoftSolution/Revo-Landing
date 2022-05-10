let BASE_URL = '';
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    BASE_URL = 'https://api.revospin.com/revospin-server-1.0/api/';
} else {
    // production code
    BASE_URL = 'https://prodapi.revospin.com/revospin-server-1.0/api/';
}

export async function sendMessage(name, email, subject, message) {
    let url = BASE_URL + `unauth/contact?name=${name}&email=${email}&subject=${subject}&message=${message}`;
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    return await response.json();
}