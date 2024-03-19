const axios = require("axios");
const { response } = require("express");
const meaningCloud = "https://api.meaningcloud.com/sentiment-2.1";


const analyze = async (url, key) => {
    const analysis = await axios.get(`${meaningCloud}?key=${key}&url=${url}&lang=en`)
    .then(response => {
        const {code} = response.data.status
        const {msg} = response.data.status
        if (code == 100) {
            return handleErrors(code, "Please, enter a valid url")
        }
        else if (code == 212) {
            return handleErrors(code, msg)  
        }
        return handleSuccess(response.data, code)
    });

    return analysis
};

const handleErrors = (code, msg) => {
    const error = {
        code, 
        msg
    }
    return error
};

//"agreement"
//"subjectivity"
//"confidence"
//"irony"
//"score_tag"

const handleSuccess = (data, code) => {
    const {agreement, subjectivity, confidence, irony, score_tag} = data
    const sample = {
        agreement, 
        subjectivity, 
        confidence, 
        irony, 
        score_tag
    }
    const result = { 
        sample, 
        code
    }
    return result
};

module.exports = {analyze};