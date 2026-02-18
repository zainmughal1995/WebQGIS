import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leftPanelWidth: 260,
};

const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setLeftPanelWidth: (state, action) => {
      state.leftPanelWidth = action.payload;
    },
  },
});

export const { setLeftPanelWidth } = layoutSlice.actions;
export default layoutSlice.reducer;
