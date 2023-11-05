import Api from '../Api';
import {urlApi} from '../../../config/ApiConfig';

export let estatesWS = {
  createEstate: async function (
    title,
    description,
    rentOrSale,
    status,
    street,
    addressNumber,
    floor,
    neighborhood,
    state,
    country,
    estateType,
    coveredSquareMeters,
    semiUncoveredSquaremeters,
    uncoveredSquareMeters,
    roomsAmount,
    bathroomsAmount,
    bedroomsAmount,
    terrace,
    balcony,
    storage,
    garage,
    frontOrBack,
    antiquity,
    orientation,
    amenites,
    currency,
    price,
    expenseCurrency,
    expenses,
    latitude,
    longitude,
    images,
    videoUrl,
    realEstateId,
  ) {
    console.log(typeof pictures);
    const pictures = images.filter(file => file);
    console.log(typeof pictures);

    const formData = new FormData(); // Create a FormData object

    // Append all the variables to the FormData object
    formData.append('title', title);
    formData.append('description', description);
    formData.append('rentOrSale', rentOrSale);
    formData.append('status', status);
    formData.append('street', street);
    formData.append('addressNumber', addressNumber);
    formData.append('floor', floor);
    formData.append('neighborhood', neighborhood);
    formData.append('state', state);
    formData.append('country', country);
    formData.append('estateType', estateType);
    formData.append('coveredSquareMeters', coveredSquareMeters);
    formData.append('semiUncoveredSquaremeters', semiUncoveredSquaremeters);
    formData.append('uncoveredSquareMeters', uncoveredSquareMeters);
    formData.append('roomsAmount', roomsAmount);
    formData.append('bathroomsAmount', bathroomsAmount);
    formData.append('bedroomsAmount', bedroomsAmount);
    formData.append('terrace', terrace);
    formData.append('balcony', balcony);
    formData.append('storage', storage);
    formData.append('garage', garage);
    formData.append('frontOrBack', frontOrBack);
    formData.append('antiquity', antiquity);
    formData.append('orientation', orientation);
    formData.append('amenites', amenites);
    formData.append('currency', currency);
    formData.append('price', price);
    formData.append('expenseCurrency', expenseCurrency);
    formData.append('expenses', expenses);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    pictures.forEach((file, index) => {
      formData.append('pictures', {
        uri: file,
        type: 'image/jpeg', // Modify the content type as needed
        name: `image_${index}.jpg`, // Set a unique name for each image
      });
    });
    formData.append('videoUrl', videoUrl);
    formData.append('realEstateId', realEstateId);
    console.log('--------------_____________________---------------');
    console.log(formData);
    console.log('--------------_____________________---------------');
    return await Api.post(urlApi.estate.createEstate, formData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the appropriate content type for file uploads
      },
    });
  },
  getEstatesByUserId: async function (id) {
    return await Api.get(urlApi.estate.getEstateByUser + id);
  },
};
