import axios from 'axios';

const jwt = 'eyJhbGciOiJIUzUxMiJ9.eyJpYXQiOjE3MTY2MDY1MTIsImV4cCI6MTcxNzQ1MjUxMiwiZW1haWwiOiJsb2NAZ21haWwuY29tIn0.W337FMjhkz2YcU8RC8O5ky1DF2pDNVd56JumjKqRrvFaNSZ2ff35JxlQ67v_NU3Jxax_BtEVMwyFDx3jcg3Oxg';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api/',
  // headers: {
  //   "Authorization": `Bearer ${jwt}`,
  //   'Content-Type': 'application/json',
  // },
});

axiosClient.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    const { config, status, data } = error.response;
    const URLS = ['/auth/local/register', '/auth/local'];
    if (URLS.includes(config.url) && status === 400) {
      const errorList = data.data || [];
      const firstError = errorList.length > 0 ? errorList[0] : {};
      const messageList = firstError.messages || [];
      const firstMessage = messageList.length > 0 ? messageList[0] : {};
      throw new Error(firstMessage.message);
    }

    return Promise.reject(error);
  }
);

export default axiosClient;

