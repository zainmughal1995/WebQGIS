import { createSlice } from "@reduxjs/toolkit";

const saved = localStorage.getItem("layers");

const layersSlice = createSlice({
  name: "layers",
  initialState: saved ? JSON.parse(saved) : [],

  reducers: {
    addLayer: (state, action) => {
      state.push(action.payload);
      localStorage.setItem("layers", JSON.stringify(state));
    },

    toggleLayer: (state, action) => {
      const l = state.find((x) => x.id === action.payload);
      if (l) l.visible = !l.visible;
      localStorage.setItem("layers", JSON.stringify(state));
    },
  },
});

export const { addLayer, toggleLayer } = layersSlice.actions;
export default layersSlice.reducer;
