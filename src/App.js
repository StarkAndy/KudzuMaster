/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, Dimensions} from 'react-native';
import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware} from 'redux';

import createSagaMiddleware from 'redux-saga';
import {logger} from 'redux-logger';

import sagaFile from './pages/NewsSreen/saga/sagaStore';

import reducer from './pages/HomeScreen/reducer/reducer';
import newsReducer from './pages/NewsSreen/reducer/reducer';

import HomeScreen from './pages/HomeScreen';
import Routes from './route';
import rootSaga from './pages/NewsSreen/saga/sagaStore';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  reducer,
  newsReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
