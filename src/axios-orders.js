import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-fe8da.firebaseio.com/',
});

export default instance;
