import { configureStore } from "@reduxjs/toolkit"
import navigationReducer from "./slices/navigationSlice"
import productsReducer from "./slices/productsSlice"
import uiReducer from "./slices/uiSlice"

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
    products: productsReducer,
    ui: uiReducer,
  },
})
export default store