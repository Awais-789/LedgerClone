import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  language: "EN",
  theme: "light",
  loading: false,
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload
    },
    setTheme: (state, action) => {
      state.theme = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    },
  },
})

export const { setLanguage, setTheme, setLoading } = uiSlice.actions
export default uiSlice.reducer
