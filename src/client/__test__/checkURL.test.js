const {validateURL} = require("../js/checkURL")

describe('urlValidity', ()=> {
    test('test if strings are false urls', () => {
        expect(validateURL("read")).toBeFalsy();
    })

    test('emails are not considered valid url', () => {
        expect(validateURL("mailto:nihal@gmail.com")).toBeFalsy();
    })

    test('expect urls to be true', () => {
        expect(validateURL("https://www.google.com")).toBeTruthy();
    })

    test('expect empty string to be falsy', () => {
        expect(validateURL("")).toBeFalsy();
    })
})