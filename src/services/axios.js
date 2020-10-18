import axios from 'axios';
import { toast } from 'react-toastify';
// import { getToken } from './auth';

axios.interceptors.response.use(
  (response) => {
    const { errors } = response.data;
    if (!!errors && !!(errors.find((error) => error.message === 'Not authorized'))) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      toast.error('Sua sessão expirou favor fazer login.');
      window.location = '/';
      return Promise.reject(Error());
    }
    return response;
  },
  (error) => (
    Promise.reject(error)
  ),
);

axios.interceptors.request.use(async (request) => {
  // const token = getToken();
  // if (token) {
  //   request.headers.Authorization = `Bearer ${token}`;
  // }
  // return request;
},
(error) => (
  Promise.reject(error)
));

export default axios;
