import { combineReducers } from 'redux'
import { APPEND_COMICS, LOADING_ERROR, LOADING_IN_PROGRESS, LOADING_SUCCESS, SET_FILTER } from '../types';

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

const filterReducer = (state = { }, action) => {
  switch (action.type) {
    case SET_FILTER:
      return action.filter;
    default:
      return state;
  }
}

const comicsReducer = (state = [], action) => {
  switch (action.type) {
    case APPEND_COMICS:
      return [
        ...state,
        ...action.comics
      ];
    case LOADING_SUCCESS:
      return action.comics;
    default:
      return state;
  }
}

export default combineReducers({
  filter: filterReducer,
  comics: comicsReducer,
  loadingError,
  loadingInProgress
})
