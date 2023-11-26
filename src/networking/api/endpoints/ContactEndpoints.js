import Api from '../Api';
import {urlApi} from '../../../config/ApiConfig';

export let contactWS = {
  createContact: async function (realEstate, type, date, comment, visitShift) {
    return await Api.post(urlApi.contact.createContact, {
      realEstate,
      type,
      date,
      comment,
      visitShift,
    });
  },
  getContacts: async function () {
    return await Api.get(urlApi.contact.getContacts);
  },
};
