import axios from 'axios';
import authHeader from './auth.header';

const api = "https://rjrydrug.herokuapp.com/media/"||'http://localhost:5000/media/'; //'http://localhost:5000/media/'||"https://rjrydrug.herokuapp.com/"

const read = (id) => {
    console.log('MediaService.js')
    return axios.get(api+id, { headers: authHeader() });
}

const functions = {
    read,
}

export default functions

