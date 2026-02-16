import { createSlice } from "@reduxjs/toolkit";

const layersSlice = createSlice({
  name: "layers",
  initialState: [],
  reducers: {
    addLayer: (state, action) => {
      state.push(action.payload);
    },

    toggleLayer: (state, action) => {
      const l = state.find((x) => x.id === action.payload);
      if (l) l.visible = !l.visible;
    },
  },
});

export const { addLayer, toggleLayer } = layersSlice.actions;
export default layersSlice.reducer;
