import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  panels: {
    browser: true,
    layers: true,
    rightPanel: true,
  },
};

const panelSlice = createSlice({
  name: "panels",
  initialState,
  reducers: {
    togglePanel: (state, action) => {
      const id = action.payload;
      state.panels[id] = !state.panels[id];
    },
  },
});

export const { togglePanel } = panelSlice.actions;
export default panelSlice.reducer;
