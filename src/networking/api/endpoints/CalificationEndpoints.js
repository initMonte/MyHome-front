import Api from '../Api';
import {urlApi} from '../../../config/ApiConfig';

export let calificationWS = {
  createCalification: async function (realEstate, calification, comment) {
    return await Api.post(urlApi.calification.createCalification, {
      realEstate,
      calification,
      comment,
    });
  },
  getMyCalifications: async function () {
    return await Api.get(urlApi.calification.getMyCalification);
  },
  getCalifications: async function (id) {
    console.log('ESTOY EN GET CALIFICATIONSSS');
    return await Api.get(urlApi.calification.getCalification + id);
  },
};
