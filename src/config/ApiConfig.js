export const config = {
  BASE_URL: 'https://myhome-366l.onrender.com/my-home/',
  TIME_OUT: 50000,
};

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
  },
  contact: {
    pruebaContact: 'contacts/prueba-contact',
    createContact: 'contacts/',
    getContacts: 'contacts/me/visit',
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
    deleteEstate: 'estates/', // Pasarle despues el id
    getEstateByUser: 'estates/user/', // Pasarle despues el id
    getImage: 'estates/media/', // Pasarle despues el nombre de la imagen
    updateEstate: 'estates/', // Pasarle despues el id
  },
};
