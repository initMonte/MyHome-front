import axios from 'axios';
import {config} from '../../config/ApiConfig';

axios.defaults.baseURL = config.BASE_URL;
axios.defaults.timeout = config.TIME_OUT;
axios.defaults.headers.common = {
  Accept: 'application/json', // el formato que espero que la info vuelva
  'Content-Type': 'application/json', // el formato en que le mando la info
};

export function setClientToken(token) {
  //console.log('.................................................');
  //console.log('ESTOYYYYYY ACAAAAA EN API AXIOS');
  //console.log(axios.defaults.headers.common);
  axios.defaults.headers.common = {Authorization: token};
  //console.log(axios.defaults.headers.common);
  //console.log('.................................................');
}
export default axios;
