import { combineReducers } from 'redux'
import { LOADING_ERROR, LOADING_IN_PROGRESS, LOADING_SUCCESS } from '../types';

const loadingError = (state = false, action) => {
  switch (action.type) {
    case LOADING_ERROR:
      return action.hasErrored;
    default:
      return state;
  }
}

const loadingInProgress = (state = false, action) => {
  switch (action.type) {
    case LOADING_IN_PROGRESS:
      return action.isLoading;
    default:
      return state;
  }
}

const comics = (state = [], action) => {
  console.log({action});
  switch (action.type) {
    case LOADING_SUCCESS:
      return action.comics;
    default:
      return state;
  }
}

export default combineReducers({
  comics: comics,
  loadingError,
  loadingInProgress
})
