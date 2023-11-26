import {createSlice} from '@reduxjs/toolkit';

export const contactReducer = createSlice({
  name: 'contact',
  initialState: {
    id: '',
    comment: '',
    date: '',
    realEstate: '',
    type: '',
    visitShift: '',
  },
  reducers: {
    saveContactAction: (state, responde) => {
      state.id = responde.payload._id;
      state.comment = responde.payload.comment;
      state.date = responde.payload.date;
      state.realEstate = responde.payload.realEstate;
      state.type = responde.payload.type;
      state.visitShift = responde.payload.visitShift;
    },
    logoutContact: state => {
      state.id = '';
      state.comment = '';
      state.date = '';
      state.realEstate = '';
      state.type = '';
      state.visitShift = '';
    },
  },
});

export const {saveContactAction, logoutContact} = contactReducer.actions;
export default contactReducer.reducer;
