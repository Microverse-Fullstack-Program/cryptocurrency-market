import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cryptoReducer from './crypto/cryptoSlice';

export default (preloadedState) => configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  preloadedState,
});
