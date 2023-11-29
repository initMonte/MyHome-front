import Api from '../Api';
import {urlApi} from '../../../config/ApiConfig';

export let contactWS = {
  createContact: async function (
    realEstate,
    estate,
    type,
    comment,
    date,
    visitShift,
  ) {
    return await Api.post(urlApi.contact.createContact, {
      realEstate,
      estate,
      type,
      comment,
      date,
      visitShift,
    });
  },
  getContactsVisits: async function () {
    return await Api.get(urlApi.contact.getContactsVisits);
  },
  getContactsQuestions: async function () {
    return await Api.get(urlApi.contact.getContactsQuestions);
  },
};
