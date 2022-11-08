import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './modules/Cart/slice';
import authReducer from './modules/Auth/slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch