
import axios from 'axios';

export const logUser = async (body) => {

    return await axios.post(`http://localhost:5050/customer/login`, body);
}

export const logWorker = async (body) => {

    return await axios.post(`http://localhost:5050/tattoo_artist/login`, body);
}

export const registerUser = async (body) => {

    return await axios.post(`http://localhost:5050/customer/register`, body);
}

export const bringTattoo = async () => {

    return await axios.get(`http://localhost:5050/gallery/all`);
}