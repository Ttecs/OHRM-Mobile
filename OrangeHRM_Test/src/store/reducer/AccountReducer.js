const initialState = {
  firstName: '',
  lastName: '',
  email: '',
};

const AccountReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case UPDATE_USER_DETAILS:
      newState = {
        ...state,

        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
      };
      return newState;

    default:
      return state;
  }
};

export default AccountReducer;
