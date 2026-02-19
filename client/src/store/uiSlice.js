import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",

  initialState: {
    modalOpen: false,
    activeTool: null, // 🔥 NEW
    rightPanelOpen: true,
    hasMap: false,
    basemap: "osm",
    editingEnabled: false,
    drawingMode: false,
  },

  reducers: {
    startDrawing: (state) => {
      state.drawingMode = true;
      state.activeTool = "draw";
    },

    stopDrawing: (state) => {
      state.drawingMode = false;
      if (state.activeTool === "draw") state.activeTool = null;
    },

    setActiveTool: (state, action) => {
      state.activeTool = action.payload;
      state.drawingMode = action.payload === "draw";
    },

    toggleEditing: (state) => {
      state.editingEnabled = !state.editingEnabled;
      if (!state.editingEnabled) {
        state.activeTool = null;
        state.drawingMode = false;
      }
    },

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
    },
  },
});

export const {
  startDrawing,
  stopDrawing,
  setActiveTool, // 🔥 NEW
  openModal,
  closeModal,
  openRightPanel,
  closeRightPanel,
  toggleRightPanel,
  openMap,
  closeMap,
  setBasemap,
  toggleEditing,
} = uiSlice.actions;

export default uiSlice.reducer;
