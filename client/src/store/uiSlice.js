import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOpen: false,
  activeTool: null,
  rightPanelOpen: true,
  hasMap: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
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
} = uiSlice.actions;

// ✅ THIS LINE MUST EXIST
export default uiSlice.reducer;
