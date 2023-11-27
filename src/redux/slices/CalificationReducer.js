import {createSlice} from '@reduxjs/toolkit';

export const calificationReducer = createSlice({
  name: 'calification',
  initialState: {
    califications: '',
    calificacionsAmount: '',
    calificationStars: '',
  },
  reducers: {
    saveCalificationsAction: (state, response) => {
      state.califications = response.payload.califications;
    },
    saveCalificationsAmountAction: (state, response) => {
      state.calificacionsAmount = response.payload;
    },
    saveCalificationsStarsAction: (state, response) => {
      state.calificationStars = response.payload;
    },
    logoutCalification: state => {
      state.califications = '';
      state.calificacionsAmount = '';
      state.calificationStars = '';
    },
  },
});

export const {
  saveCalificationsAction,
  saveCalificationsAmountAction,
  saveCalificationsStarsAction,
  logoutCalification,
} = calificationReducer.actions;
export default calificationReducer.reducer;
