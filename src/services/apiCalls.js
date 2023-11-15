
import axios from 'axios';

export const logUser = async (body) => {

    console.log(body);

    return await axios.post(`http://localhost:5050/customer/login`, body);
}

export const registerUser = async (body) => {
    console.log(body);
    return await axios.post(`http://localhost:5050/customer/register`, body);
}

export const bringTattoo = async () => {

    return await axios.get(`https://rickandmortyapi.com/api/character/?page=6`);
}