import axios from 'axios';

export function baseAxios(options) {
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  return axios.create({
    baseURL: 'https://newsapi.org/v2/top-headlines',
    timeout: 30000,
    headers: defaultHeaders,
  });
}

export function fetchNewsData(axiosObject) {
  const reqObj = {
    method: 'get',
    url: null,
    params: {country: 'us', apiKey: '525d59de9c564eceb17a9d1cf351f174'},
  };

  return new Promise((resolve, reject) => {
    axiosObject()
      .request(reqObj)
      .then((res) => {

        const respnse="test";
        
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
