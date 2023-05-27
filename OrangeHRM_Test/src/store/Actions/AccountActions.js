import {
  SAVE_BEARER_TOKEN,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from './ActionTypes';

export function userLogin(data) {
  console.log('######Action ###', data);
  return {
    type: USER_LOGIN_SUCCESS,
    firstName: data.employeeName,
    userRole: data.userRole,
  };
}

export function saveBearerToken(data) {
  console.log('######Action bearer ###', data.access_token);
  return {
    type: SAVE_BEARER_TOKEN,
    token: data.access_token,
  };
}

export function userLogout() {
  return {
    type: USER_LOGOUT,
  };
}
