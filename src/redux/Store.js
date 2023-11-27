import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
//import {encryptTransform} from 'redux-persist-transform-encrypt';

import authReducer from './slices/AuthReducer';
import userReducer from './slices/UserReducer';
import estateReducer from './slices/EstateReducer';
import contactReducer from './slices/ContactReducer';
import calificationReducer from './slices/CalificationReducer';

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  estate: estateReducer,
  contact: contactReducer,
  calification: calificationReducer,
});
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, reducers);
export default configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({immutableCheck: false, serializableCheck: false}),
});
