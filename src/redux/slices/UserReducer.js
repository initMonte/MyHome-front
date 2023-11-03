import {createSlice} from '@reduxjs/toolkit';

export const userReducer = createSlice({
  name: 'user',
  initialState: {
    id: '',
    email: '',
    pass: '',
    email2: '',
    name: '',
    surname: '',
    telephone: '',
    telephone2: '',
    avatarName: '',
    avatarImage: null,
  },
  reducers: {
    meAction: (state, response) => {
      console.log('ENTRE EXITOSAMENTE A USER REDUCER -> ME ACTION');
      state.id = response.payload.data.user._id;
      state.email = response.payload.data.user.email;
      state.email2 = response.payload.data.user.email2;
      state.name = response.payload.data.user.name;
      state.surname = response.payload.data.user.surname;
      state.telephone = response.payload.data.user.telephone;
      state.telephone2 = response.payload.data.user.telephone2;
      state.avatarName = response.payload.data.user.avatar;
    },
    saveAvatarAction: (state, response) => {
      state.avatarImage = response.payload;
    },
    saveEmailAction: (state, responde) => {
      state.email = responde.payload.data.user.email;
    },
    saveLoginInfoAction: (state, token) => {
      state.email = token.payload.email;
      state.pass = token.payload.password;
    },
  },
});

export const {
  meAction,
  saveAvatarAction,
  saveEmailAction,
  saveLoginInfoAction,
} = userReducer.actions;
export default userReducer.reducer;
