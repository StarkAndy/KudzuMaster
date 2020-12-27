import * as actions from '../action/actiontype';

const INITIAL_STATE = {
  loading: false,
  newsResponse: '',
};

const NewsReducer = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case actions.FETCH_NEWS_DATA:
      return {...state, loading: true};
    case actions.FETCH_NEWS_SUCCESS:
      return {...state, loading: false, newsResponse: payload};
    default:
      return state;
  }
};

export default NewsReducer;
