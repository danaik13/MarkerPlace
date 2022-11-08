import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  auth: boolean;
}

const initialState: InitialState = {
  auth: false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {

  }
})

export default authSlice.reducer;