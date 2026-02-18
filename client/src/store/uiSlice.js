import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",

  initialState: {
    modalOpen: false,
    activeTool: null,
    rightPanelOpen: true,
    hasMap: false,
    basemap: "osm",
  },

  reducers: {
    openModal: (state, action) => {
      state.modalOpen = true;
      state.activeTool = action.payload || null;
    },

    closeModal: (state) => {
      state.modalOpen = false;
      state.activeTool = null;
    },

    openRightPanel: (state) => {
      state.rightPanelOpen = true;
    },

    closeRightPanel: (state) => {
      state.rightPanelOpen = false;
    },

    toggleRightPanel: (state) => {
      state.rightPanelOpen = !state.rightPanelOpen;
    },

    openMap: (state) => {
      state.hasMap = true;
    },

    closeMap: (state) => {
      state.hasMap = false;
    },

    setBasemap: (state, action) => {
      state.basemap = action.payload;
    }, // 👈 NEW
  },
});

export const {
  openModal,
  closeModal,
  openRightPanel,
  closeRightPanel,
  toggleRightPanel,
  openMap,
  closeMap,
  setBasemap,
} = uiSlice.actions;

export default uiSlice.reducer;
