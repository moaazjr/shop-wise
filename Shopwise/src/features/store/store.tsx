import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '../api/productsApi'
import cartReducer from '../slices/cartSlice'
// ...
const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    cart: cartReducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export default store