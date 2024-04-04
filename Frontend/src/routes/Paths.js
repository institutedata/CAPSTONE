/** @format */
import { KEY } from '../config/APIkey';

function _connect(...paths) {
  return KEY.SERVER_URL + '/' + paths.join('/');
}

export const SERVER_PATHS = {
  LOGIN: _connect('user', 'login'),
  EXERCISE_API: _connect('exercise', 'apiPull'),
};

console.log('path', SERVER_PATHS.LOGIN);
