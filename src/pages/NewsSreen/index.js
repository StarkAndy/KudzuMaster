import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

const NewsScreen = () => {
  const [newData, changeNewsData] = useState('');

  function baseAxios(options) {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    return axios.create({
      baseURL: 'https://newsapi.org/v2/top-headlines',
      timeout: 30000,
      headers: defaultHeaders,
    });
  }

  useEffect(() => {
    function fetchNewsData() {
      const reqObj = {
        method: 'get',
        url: null,
        params: {country: 'us', apiKey: '525d59de9c564eceb17a9d1cf351f174'},
      };

      baseAxios()
        .request(reqObj)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    fetchNewsData();
  });

  return (
    <View>
      <Text>News repsonse</Text>
    </View>
  );
};

export default NewsScreen;
