import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.realworld.io/api/articles',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });