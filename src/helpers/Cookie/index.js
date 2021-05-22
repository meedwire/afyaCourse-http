class Cookies {
    get(key, request) {
        if (!key) 
            throw new Error('Key cookie is required.')

        const cookies = request.headers.cookie;

        if (cookies) {
            const parsedCookie = cookies.split(' ').join('').split(';');
            const cookieObject = Object.fromEntries(parsedCookie.map(cookie => cookie.split('=')));

            if (!cookieObject[key]){
                throw new Error('Cookie not found.')
            }

            return cookieObject[key];
        } else {
            throw new Error('Cookies not exists')
        }

    }

    set(key, value, response, maxAge) {
        return response.cookie(key, value, { maxAge, httpOnly: true });
    }

}

module.exports = new Cookies()