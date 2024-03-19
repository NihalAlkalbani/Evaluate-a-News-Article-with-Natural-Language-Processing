const validURL = require('valid-url');

const isValidUrl = (url) => Boolean(validURL.isWebUri(`${url}`))


const validateURL = (url) => {
    return isValidUrl(url)
}


export {validateURL}