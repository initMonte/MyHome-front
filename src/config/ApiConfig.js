export const config = {
  BASE_URL: 'https://myhome-366l.onrender.com/my-home/',
  TIME_OUT: 50000,
};

export const apiGooglePlaces = 'AIzaSyCGLNMCEr3a9j5V0IQ7uLs9BLC-ff2XEuI';

export const urlApi = {
  user: {
    pruebaUser: 'users/prueba-usuario',
    me: 'users/me',
    getUser: 'users/', // Pasarle despues el id
    register: 'users/register',
    login: 'users/login',
    verifyCode: 'users/confirmation-code/verification',
    confirmationCodeForgotPassword: 'users/confirmation-code',
    passwordChange: 'users/reset-password',
    update: 'users/me',
    deleteUser: 'users/me',
    getAvatar: 'users/media/', // Pasarle despues el nombre de la imagen
    addFavorite: 'users/favorites/', // Pasarle despues el id
    unFavorite: 'users/favorites/', // Pasarle despues el id
    viewFavorites: 'users/me/favorites',
    userLogin: 'users/user-login',
  },
  contact: {
    pruebaContact: 'contacts/prueba-contact',
    createContact: 'contacts/',
    getContactsVisits: 'contacts/me/visit',
    getContactsQuestions: 'contacts/me/question',
    deleteContact: 'contacts/',
  },
  calification: {
    pruebaCalification: 'califications/prueba-calification',
    createCalification: 'califications/',
    getCalification: 'califications/', // Pasarle despues el id
    getMyCalification: 'califications/me',
    getCalificationById: 'califications/view-calification/', // Pasarle despues el id
  },
  estate: {
    pruebaEstate: 'estates/prueba-estate',
    createEstate: 'estates/',
    getEstate: 'estates/', // Pasarle despues el id
    getNearEstates: 'estates/estatesNearBy/search',
    getReservations: 'estates/user/my-reservations',
    deleteEstate: 'estates/', // Pasarle despues el id
    getEstateByUser: 'estates/user/', // Pasarle despues el id
    getEstatesFiltered: 'estates/filter',
    getImage: 'estates/media/', // Pasarle despues el nombre de la imagen
    updateEstate: 'estates/', // Pasarle despues el id
    bookEstate: 'estates/reservation/', // Pasarle despues el id del estate
  },
};
