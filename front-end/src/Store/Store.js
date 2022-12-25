import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './Authentication';



const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
  }
});



export default store;