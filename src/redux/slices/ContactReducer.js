import {createSlice} from '@reduxjs/toolkit';

export const contactReducer = createSlice({
  name: 'contact',
  initialState: {
    id: '',
    comment: '',
    date: '',
    estate: '',
    realEstate: '',
    type: '',
    visitShift: '',
    created_at: '',
  },
  reducers: {
    saveContactAction: (state, responde) => {
      state.id = responde.payload._id;
      state.comment = responde.payload.comment;
      state.date = responde.payload.date;
      state.created_at = responde.payload.created_at;
      state.estate = responde.payload.estate;
      state.realEstate = responde.payload.realEstate;
      state.type = responde.payload.type;
      state.visitShift = responde.payload.visitShift;
    },
    logoutContact: state => {
      state.id = '';
      state.comment = '';
      state.date = '';
      state.estate = '';
      state.realEstate = '';
      state.type = '';
      state.visitShift = '';
      state.created_at = '';
    },
  },
});

export const {saveContactAction, logoutContact} = contactReducer.actions;
export default contactReducer.reducer;
