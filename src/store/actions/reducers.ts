import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  isWriteForm: boolean; // New field to track if the write form is open
}

const initialState: CartState = {
  isWriteForm: false, // New field to track if the write form is open
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setIsWriteForm: (state, action: PayloadAction<boolean>) => {
      state.isWriteForm = action.payload;
    },
  },
});

export const { setIsWriteForm } = cartSlice.actions;
export default cartSlice.reducer;
