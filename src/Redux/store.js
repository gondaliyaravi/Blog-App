import { createSlice, configureStore } from '@reduxjs/toolkit'
import userReduser from './userReduser';
 

export const store = configureStore({
    reducer: {
        users: userReduser
    }
});
  