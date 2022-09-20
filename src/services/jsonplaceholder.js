import { getData } from './api.js';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const resources = {
  POST: 'posts',
  COMMENTS: 'comments',
  ALBUMS: 'albums',
  PHOTOS: 'photos',
  TODOS: 'todos',
  USERS: 'users'
};

export async function getResource(resource) {
  const data = await getData(`${BASE_URL}/${resource}`);
  return data;
}