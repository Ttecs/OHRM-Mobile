import {USER_LOGIN_SUCCESS} from './ActionTypes';

export function userLogin(data) {
  return {
    type: USER_LOGIN_SUCCESS,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
  };
}
