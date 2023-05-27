import {
  SAVE_BEARER_TOKEN,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
} from '../Actions/ActionTypes';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  token: '',
  userRole: '',
};

const AccountReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      console.log('########## Reducer ########', action.firstName);
      newState = {
        ...state,

        firstName: action.firstName,
        userRole: action.userRole,
      };
      return newState;

    case SAVE_BEARER_TOKEN:
      console.log('########## Reducer ########', action.token);
      let newState;
      newState = {
        ...state,
        token: action.token,
      };
      return newState;

    case USER_LOGOUT:
      newState = {
        ...state,
        firstName: '',
        lastName: '',
        email: '',

        userRole: '',
      };
      return newState;

    default:
      return state;
  }
};

export default AccountReducer;
