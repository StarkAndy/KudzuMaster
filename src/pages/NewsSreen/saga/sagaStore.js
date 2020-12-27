import * as actions from '../action/actiontype';
import {put, takeLatest, all} from 'redux-saga/effects';
import {fetchNewsData, baseAxios} from '../../../services/request';

function* fetchNews() {
  console.log('Fetch news data');

  const json = yield fetch(
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=525d59de9c564eceb17a9d1cf351f174',
  ).then((response) => response.json());
  //   fetchNewsData(baseAxios())
  //     .then((response) => alert(response))
  //     .catch((error) => alert('failure'));

  yield put({type: actions.FETCH_NEWS_SUCCESS, payload: json});
}

function* fetchDataWatcher() {
  yield takeLatest(actions.FETCH_NEWS_DATA, fetchNews);
}

export default function* rootSaga() {
  yield all([fetchDataWatcher()]);
}
