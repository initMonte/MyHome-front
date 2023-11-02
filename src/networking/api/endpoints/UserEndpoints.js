import Api from '../Api';
import {urlApi} from '../../../config/ApiConfig';

export let userWS = {
  register: async function (
    email,
    password,
    name,
    telephone,
    telephone2,
    email2,
  ) {
    return await Api.post(urlApi.user.register, {
      email,
      password,
      name,
      telephone,
      telephone2,
      email2,
    });
  },
  verifyCode: async function (email, code) {
    console.log('email en UserEndpoints: ' + email);
    console.log('code en UserEndpoints: ' + code);
    return await Api.post(urlApi.user.verifyCode, {email, code});
  },
  login: async function (email, password) {
    console.log('email en UserEndpoint: ' + email);
    console.log('password en UserEndpoint: ' + password);
    return await Api.post(urlApi.user.login, {email, password});
  },
  me: async function () {
    console.log('haciendo GET ME');
    return await Api.get(urlApi.user.me);
  },
  getAvatar: async function () {
    console.log('haciendo GET AVATAR');
    return await Api.get(urlApi.user.getAvatar);
  },
  confirmationCodeForgotPassword: async function (email) {
    console.log('Mandando codigo de recuperacion de PASS');
    console.log(email);
    return await Api.post(urlApi.user.confirmationCodeForgotPassword, {email});
  },
  passwordChange: async function (email, password) {
    console.log('CAMBIANDO LA PASS');
    return await Api.post(urlApi.user.passwordChange, {email, password});
  },
  update: async function (email, email2, name, surname, telephone, telephone2) {
    return await Api.put(urlApi.user.update, {
      email,
      email2,
      name,
      surname,
      telephone,
      telephone2,
    });
  },
  deleteUser: async function () {
    return await Api.delete(urlApi.user.deleteUser);
  },
};
