import * as actions from './actiontype';

/** actions for news **/
export const fetchNews = () => ({
  type: actions.FETCH_NEWS_DATA,
});

export const fetchNewsSuccess = (response) => ({
  type: actions.FETCH_NEWS_SUCCESS,
  payload: response,
});
