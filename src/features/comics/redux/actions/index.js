import ComicsService from "@features/comics/services/comics.service";
import { APPEND_COMICS, LOADING_ERROR, LOADING_IN_PROGRESS, LOADING_SUCCESS, SET_FILTER } from '../types';
export const loadingError = bool => (
  {
    type: LOADING_ERROR,
    hasErrored: bool
  }
)

export const loadingInProgress = bool => (
  {
    type: LOADING_IN_PROGRESS,
    isLoading: bool
  }
)

export const loadingSuccess = comics => (
  {
    type: LOADING_SUCCESS,
    comics
  }
)

export const appendComics = comics => (
  {
    type: APPEND_COMICS,
    comics
  }
)

export const setFilter = filter => (
  {
    type: SET_FILTER,
    filter
  }
)

export const getComics = (filter) => {
  const comicsService = new ComicsService();
  return dispatch => {
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));
    comicsService.getComics(filter?.dateRange, filter?.orderBy, filter?.offset).then((response) => {
      const comics = response?.data?.data?.results;
      if (comics?.length) {
        if (!!!filter || !!!filter.offset || filter.offset === 0) {
          dispatch(loadingSuccess(comics));
        } else {
          dispatch(appendComics(comics));
        }
      };
      dispatch(loadingInProgress(false));
    }).catch(() => dispatch(loadingError(true)));
  }
}