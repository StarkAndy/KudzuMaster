/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

const App = () => {
  const [loader, isLoading] = useState(true);
  const [data, changeData] = useState('');

  const apiCall = (text) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts/1', {
          method: 'GET',
        })
          .then((response) => response.json())
          .then((responseJson) => {
            resolve(responseJson);
          })
          .catch((error) => {
            reject(error);
          });
      }, 3000);
    });
  };

  apiCall()
    .then((res) => {
      isLoading(false);
      changeData(res);
    })
    .catch((message) => {
      isLoading(false);
    });

  return (
    <View>
      <SafeAreaView>
        {loader ? (
          <ActivityIndicator />
        ) : (
          <Text style={{fontSize: 30, alignSelf: 'center'}}>{data.id}</Text>
        )}
      </SafeAreaView>
    </View>
  );
};

export default App;
