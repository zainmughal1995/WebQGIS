import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basemap: "satellite",
};

const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    setBasemap: (state, action) => {
      state.basemap = action.payload;
    },
  },
});

export const { setBasemap } = mapSlice.actions;
export default mapSlice.reducer;
