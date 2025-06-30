import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  products: [
    {
      id: 1,
      name: "Ledger Flex",
      image: "/assets/hero_marketing_flex.webp",
      isNew: true,
      category: "hardware",
    },
    {
      id: 2,
      name: "Ledger Stax",
      image: "/assets/Ledger Stax.jpg",
      isNew: false,
      category: "hardware",
    },
    {
      id: 3,
      name: "Ledger Nano X",
      image: "/assets/Ledger Nano X.jpg",
      isNew: false,
      category: "hardware",
    },
    {
      id: 4,
      name: "Ledger Nano S Plus",
      image: "/assets/Ledger Nano S Plus.jpg",
      isNew: false,
      category: "hardware",
    },
  ],
  selectedCategory: "all",
}

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload
    },
  },
})

export const { setSelectedCategory } = productsSlice.actions
export default productsSlice.reducer
