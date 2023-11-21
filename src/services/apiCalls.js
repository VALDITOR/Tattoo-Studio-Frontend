
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

export const bringProfile = async () => {

    return await axios.get(`https://localhost:5050/customer/profile`);
}

export const bringArtistProfile = async () => {

    return await axios.get(`https://localhost:5050/tattoo_artist/profile`);
}

export const myDates = async (credentials) => {
    console.log("token", credentials);
    return await axios.get('http://localhost:5050/customer/appointment/', {
      headers: { Authorization: `Bearer ${credentials}` }})
    }

export const deleteMyDates = async (credentials) => {
    return await axios.delete('http://localhost:5050/appoiments/delete', {
        headers: { Authorization: `Bearer ${credentials}` }})
    }

export const getAllCustomers = async (credentials) => {
    return await axios.delete('http://localhost:5050/tattoo_artist/customers', {
        headers: { Authorization: `Bearer ${credentials}` }})
    }