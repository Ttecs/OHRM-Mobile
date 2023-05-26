import {combineReducers} from 'redux';
import AccountReducer from './AccountReducer';

const RootReducer = combineReducers({
  user_auth_info: AccountReducer,
});

export default RootReducer;
