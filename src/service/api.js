import axios from 'axios';

const api = axios;
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';


export const getUsers = api.get(BASE_URL);