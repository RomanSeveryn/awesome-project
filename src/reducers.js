import { combineReducers } from 'redux';

import {
  usersReducer as users
} from './store/users';

export const rootReducer = combineReducers({
  users
});