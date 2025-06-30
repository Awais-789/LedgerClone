import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  activeTab: "Products",
  mobileMenuOpen: false,
}

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false
    },
  },
})

export const { setActiveTab, toggleMobileMenu, closeMobileMenu } = navigationSlice.actions
export default navigationSlice.reducer
