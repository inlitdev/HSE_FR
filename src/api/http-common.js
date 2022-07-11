import axios from 'axios';
export default axios.create({
    // baseURL: 'http://localhost:3033/',
    baseURL: 'http://localhost:3022/',
    // baseURL: 'http://192.168.1.223:3033/',
    headers: {
        'Content-type' : 'application/json',
        'Authorization' :  `Bearer ${localStorage.usertoken}`
    },
});
