import  { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../axios.js';


export const fetchUserData = createAsyncThunk('auth/fetchUserData', async (params) => {
  const {data} = await axios.post('/auth/login', params)
  return data;
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
  const {data} = await axios.post('/auth/register', params)
  return data;
})

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
  const {data} = await axios.get('/auth/me', params)
  return data;
})

const initialState = {
  data: null,
  status: 'loading',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducer: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchUserData.pending]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchUserData.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchUserData.rejected]: (state) => {
      state.status = 'error';
      state.data = null
    },
    [fetchAuth.pending]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = 'error';
      state.data = null
    },
    [fetchRegister.pending]: (state) => {
      state.status = 'loading';
      state.data = null;
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.status = 'loaded';
      state.data = action.payload;
    },
    [fetchRegister.rejected]: (state) => {
      state.status = 'error';
      state.data = null
    },
  },
});

export const selectIsAuth = state => Boolean(state.auth.data);

export const authReducer = authSlice.reducer;