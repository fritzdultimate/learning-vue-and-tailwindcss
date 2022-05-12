import axios from 'axios';

export const NOMICS = axios.create({
    baseURL: `https://api.nomics.com/v1/`
})