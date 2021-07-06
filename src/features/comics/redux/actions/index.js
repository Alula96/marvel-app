import ComicsService from "@features/comics/services/comics.service";

export const loadingError = bool => (
  {
    type: 'LOADING_ERROR',
    hasErrored: bool
  }
)

export const loadingInProgress = bool => (
  {
    type: 'LOADING_IN_PROGRESS',
    isLoading: bool
  }
)

export const loadingSuccess = comics => (
  {
    type: 'LOADING_SUCCESS',
    comics
  }
)

export const getComics = (dateRange, orderBy) => {
  const comicsService = new ComicsService();
  return dispatch => {
    dispatch(loadingError(false));
    dispatch(loadingInProgress(true));

    comicsService.getComics(dateRange, orderBy).then((response) => {
      const comics = response?.data?.data?.results;
      if (comics?.length) {
        dispatch(loadingSuccess(comics))
      }
      dispatch(loadingInProgress(false))
    }).catch(() => dispatch(loadingError(true)));
  }
}