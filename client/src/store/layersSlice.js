import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Countries",
    geomType: "polygon",
    visible: true,
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [60, 25],
            [75, 25],
            [75, 35],
            [60, 35],
            [60, 25],
          ],
        ],
      },
    },
  },

  {
    id: 2,
    name: "Rivers",
    geomType: "line",
    visible: true,
    data: {
      type: "Feature",
      geometry: {
        type: "LineString",
        coordinates: [
          [62, 26],
          [70, 34],
        ],
      },
    },
  },

  {
    id: 3,
    name: "Cities",
    geomType: "point",
    visible: true,
    data: {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [68, 30],
      },
    },
  },
];

const slice = createSlice({
  name: "layers",
  initialState,
  reducers: {
    toggleLayer: (state, action) => {
      const l = state.find((x) => x.id === action.payload);
      if (l) l.visible = !l.visible;
    },
  },
});

export const { toggleLayer } = slice.actions;
export default slice.reducer;
