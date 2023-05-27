import {combineReducers} from 'redux';
import AccountReducer from './AccountReducer';

const RootReducer = combineReducers({
  account_info: AccountReducer,
});

export default RootReducer;
