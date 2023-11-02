import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {userWS} from '../../networking/api/endpoints/UserEndpoints';
import {setClientToken} from '../../networking/api/Api';

export const fetchLogin = createAsyncThunk(
  'auth/fetchLogin',
  async ({email, password}, {rejectWithValue}) => {
    try {
      return await userWS.login(email, password);
    } catch (error) {
      return rejectWithValue({
        error: error.response,
      });
    }
  },
);

export const authReducer = createSlice({
  name: 'auth',
  initialState: {
    user: {
      id: '',
      email: '',
    },
    session: {
      appId: '',
      jwt: '',
      pnToken: '',
    },
    isFetching: false,
  },
  reducers: {
    updatePNToken: (state, token) => {
      state.session.pnToken = token.payload;
      console.log(
        'token.payload;token.payload;token.payload;token.payload;: ',
        state.session.pnToken,
      );
    },
    loginAction: (state, token) => {
      console.log('ENTRE EXITOSAMENTE A AUTH REDUCER -> LOGIN ACTION');
      setClientToken(token.payload.data.token);
      state.session.jwt = token.payload.data.token;
      state.user.id = token.payload.data.user._id;
      state.user.email = token.payload.data.user.email;
    },
    logoutAction: state => {
      state.session.appId = '';
      state.session.jwt = '';
      state.user.id = '';
      state.user.email = '';
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchLogin.pending, state => {
      console.log('ENTRE EXITOSAMENTE A AUTH REDUCER -> PENDING');
      state.isFetching = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, response) => {
      console.log('ENTRE EXITOSAMENTE A AUTH REDUCER -> SUCCESS');
      state.isFetching = false;
      state.user.id = response.payload.data.user.id;
      state.user.email = response.payload.data.user.email;
      state.session.jwt = response.payload.data.token;
      state.session.appId = response.payload.data.appId;
    });
    builder.addCase(fetchLogin.rejected, state => {
      console.log('ENTRE EXITOSAMENTE A AUTH REDUCER -> REJECTED');
      state.isFetching = false;
    });
  },
});

export const {updatePNToken, loginAction, logoutAction} = authReducer.actions;
export default authReducer.reducer;
