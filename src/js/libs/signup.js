const axios = require('axios');
const SIGN_UP_PATIENT_URL = "https://e-care-be-api.herokuapp.com/api/v1/user/patient/register/";
let signUpData = {
    user:{
        username:null,
        email:null,
        password:null,
    },
    phone_number:null,
    first_name:null,
    last_name:null,
    other_name:null,
    gender: null,
    date_of_birth: null,
    city: null,
    lga: null,
    state: null,
}

export function signUpPatient(userData){
    let data = JSON.stringify(userData);
    return axios({
        method: 'post',
        url: SIGN_UP_PATIENT_URL,
        data: data,
        headers: { 
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        validateStatus: (status) => {
            return true; 
        },
        });
}