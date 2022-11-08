import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  cartTotalQuantity: number;
}

const initialState: InitialState = {
  cartTotalQuantity: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {

  }
})

export default cartSlice.reducer;