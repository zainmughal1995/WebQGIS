import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./uiSlice";
import layersReducer from "./layersSlice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    layers: layersReducer,
  },
});
