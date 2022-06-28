import { ActionTypes } from './action-types';
import { Action } from './types';

const initialState = {
  isLoading: false,
  users: [],
};

export const usersReducer = (state = initialState, action = Action) => {
  switch (action.type) {
    case ActionTypes.START_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }

    case ActionTypes.FINISH_LOADING: {
      return {
        ...state,
        isLoading: false,
      };
    }

    case ActionTypes.REMOVE_USER: {
      return {
        ...state,
        users: action.payload,
      };
    }
    default:
      return state;
  }
};
