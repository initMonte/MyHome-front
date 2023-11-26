import {createSlice} from '@reduxjs/toolkit';

export const estateReducer = createSlice({
  name: 'estate',
  initialState: {
    id: '',
    title: '',
    description: '',
    rentOrSale: '',
    street: '',
    addressNumber: '',
    floor: '',
    neighborhood: '',
    state: '',
    country: '',
    estateType: '',
    coveredSquareMeters: '',
    semiUncoveredSquaremeters: '',
    uncoveredSquareMeters: '',
    roomsAmount: '',
    bathroomsAmount: '',
    bedroomsAmount: '',
    terrace: false,
    balcony: false,
    storage: false,
    garage: '',
    frontOrBack: '',
    antiquity: '',
    orientation: '',
    amenites: [],
    status: '',
    price: '',
    currency: '',
    expenses: '',
    expenseCurrency: '',
    latitude: '',
    longitude: '',
    images: [],
    videoUrl: '',
    realEstate: '',
    realEstateAvatar: '',
    realEstateName: '',
    realEstateTelephone1: '',
    realEstateTelephone2: '',
    realEstateEmail1: '',
    realEstateEmail2: '',
  },
  reducers: {
    saveEstateAction: (state, response) => {
      console.log('ENTRE EXITOSAMENTE A ESTATE REDUCER -> SAVE ESTATE ACTION');
      state.id = response.payload._id;
      state.title = response.payload.title;
      state.description = response.payload.description;
      state.rentOrSale = response.payload.rentOrSale;
      state.street = response.payload.street;
      state.addressNumber = response.payload.addressNumber;
      state.floor = response.payload.floor;
      state.neighborhood = response.payload.neighborhood;
      state.state = response.payload.state;
      state.country = response.payload.country;
      state.estateType = response.payload.estateType;
      state.coveredSquareMeters = response.payload.coveredSquareMeters;
      state.semiUncoveredSquaremeters = response.payload.semiUncoveredSquaremeters;
      state.uncoveredSquareMeters = response.payload.uncoveredSquareMeters;
      state.roomsAmount = response.payload.roomsAmount;
      state.bathroomsAmount = response.payload.bathroomsAmount;
      state.bedroomsAmount = response.payload.bedroomsAmount;
      state.terrace = response.payload.terrace;
      state.balcony = response.payload.balcony;
      state.storage = response.payload.storage;
      state.garage = response.payload.garage;
      state.frontOrBack = response.payload.frontOrBack;
      state.antiquity = response.payload.antiquity;
      state.orientation = response.payload.orientation;
      state.amenites = response.payload.amenites;
      state.status = response.payload.status;
      state.price = response.payload.price;
      state.currency = response.payload.currency;
      state.expenses = response.payload.expenses;
      state.expenseCurrency = response.payload.expenseCurrency;
      state.latitude = response.payload.latitude;
      state.longitude = response.payload.longitude;
      state.images = response.payload.images;
      state.videoUrl = response.payload.videoUrl;
      state.realEstate = response.payload.realEstate;
    },
    saveRealEstateAction: (state, response) => {
      state.realEstateAvatar = response.payload.data.user.avatar;
      state.realEstateName = response.payload.data.user.name;
      state.realEstateTelephone1 = response.payload.data.user.telephone;
      state.realEstateTelephone2 = response.payload.data.user.telephone2;
      state.realEstateEmail1 = response.payload.data.user.email;
      state.realEstateEmail2 = response.payload.data.user.email2;
    },
    saveRealEstateAvatarAction: (state, response) => {
      console.log('SAVE REAL ESTATE AVATAR');
      state.realEstateAvatar = response.payload.data.user.avatar;
    },
    logoutEstate: state => {
      state.id = '';
      state.title = '';
      state.description = '';
      state.rentOrSale = '';
      state.street = '';
      state.addressNumber = '';
      state.neighborhood = '';
      state.state = '';
      state.country = '';
      state.estateType = '';
      state.coveredSquareMeters = '';
      state.semiUncoveredSquaremeters = '';
      state.uncoveredSquareMeters = '';
      state.roomsAmount = '';
      state.bathroomsAmount = '';
      state.bedroomsAmount = '';
      state.terrace = false;
      state.balcony = false;
      state.storage = false;
      state.garage = '';
      state.frontOrBack = '';
      state.antiquity = '';
      state.orientation = '';
      state.amenites = [];
      state.status = '';
      state.price = '';
      state.currency = '';
      state.expenses = '';
      state.expenseCurrency = '';
      state.latitude = '';
      state.longitude = '';
      state.images = [];
      state.realEstate = '';
      state.realEstateAvatar = '';
      state.realEstateAvatar = '';
      state.realEstateName = '';
      state.realEstateTelephone1 = '';
      state.realEstateTelephone2 = '';
      state.realEstateEmail1 = '';
      state.realEstateEmail2 = '';
    },
  },
});

export const {
  saveEstateAction,
  saveRealEstateAction,
  saveRealEstateAvatarAction,
  logoutEstate,
} = estateReducer.actions;
export default estateReducer.reducer;
