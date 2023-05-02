import { combineReducers } from 'redux';
import {
  FETCH_GREETING_REQUEST,
  FETCH_GREETING_SUCCESS,
  FETCH_GREETING_FAILURE,
} from '../actions/index';

const greetingReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_GREETING_REQUEST:
      return { ...state, loading: true };
    case FETCH_GREETING_SUCCESS:
      return { loading: false, message: action.payload };
    case FETCH_GREETING_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  greeting: greetingReducer,
});

export default rootReducer;
