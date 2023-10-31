import Api from '../Api';
import urlApi from '../../../config/ApiConfig';

export let userWS = {
  register: async function (
    name,
    surname,
    email,
    telephone,
    password,
    nickName,
  ) {
    console.log('asdasd');
    console.log(name);
    console.log(surname);
    console.log(email);
    console.log(telephone);
    console.log(password);
    console.log(nickName);
    return await Api.post('users/register', {
      name,
      surname,
      email,
      telephone,
      password,
      nickName,
    });
  },
};
