const ICON =
  "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/square.svg";

export const TOOLBAR_CONFIG = [
  {
    id: "project",
    tools: [
      { id: "newProject", icon: ICON, tooltip: "New Project" },
      { id: "openProject", icon: ICON, tooltip: "Open Project" },
      { id: "saveProject", icon: ICON, tooltip: "Save Project" },
      { id: "newPrintLayout", icon: ICON, tooltip: "New Print Layout" },
      { id: "layoutManager", icon: ICON, tooltip: "Show Layout Manager" },
      { id: "styleManager", icon: ICON, tooltip: "Style Manager" },
    ],
  },

  {
    id: "navigation",
    tools: [
      { id: "pan", icon: ICON, tooltip: "Pan Map" },
      { id: "panToSelection", icon: ICON, tooltip: "Pan to Selection" },
      { id: "zoomIn", icon: ICON, tooltip: "Zoom In" },
      { id: "zoomOut", icon: ICON, tooltip: "Zoom Out" },
      { id: "zoomFull", icon: ICON, tooltip: "Zoom Full" },
      { id: "zoomToSelection", icon: ICON, tooltip: "Zoom to Selection" },
      { id: "zoomToLayer", icon: ICON, tooltip: "Zoom to Layer" },
      { id: "zoomNative", icon: ICON, tooltip: "Zoom to Native Resolution" },
      { id: "zoomLast", icon: ICON, tooltip: "Zoom Last" },
      { id: "zoomNext", icon: ICON, tooltip: "Zoom Next" },
      { id: "newMapView", icon: ICON, tooltip: "New Map View" },
      { id: "new3DMapView", icon: ICON, tooltip: "New 3D Map View" },
      { id: "newBookmark", icon: ICON, tooltip: "New Spatial Bookmark" },
      { id: "showBookmarks", icon: ICON, tooltip: "Show Spatial Bookmarks" },
      { id: "temporal", icon: ICON, tooltip: "Temporal Controller" },
      { id: "refresh", icon: ICON, tooltip: "Refresh" },
    ],
  },

  {
    id: "selection",
    tools: [
      { id: "selectClick", icon: ICON, tooltip: "Select Feature (Click)" },
      { id: "selectValue", icon: ICON, tooltip: "Select by Value" },
      { id: "deselectAll", icon: ICON, tooltip: "Deselect All" },
      { id: "selectLocation", icon: ICON, tooltip: "Select by Location" },
    ],
  },

  {
    id: "attributes",
    tools: [
      { id: "identify", icon: ICON, tooltip: "Identify Features" },
      { id: "fieldCalc", icon: ICON, tooltip: "Open Field Calculator" },
      { id: "toolbox", icon: ICON, tooltip: "Toolbox" },
      { id: "stats", icon: ICON, tooltip: "Statistical Summary" },
      { id: "attributeTable", icon: ICON, tooltip: "Open Attribute Table" },
      { id: "measure", icon: ICON, tooltip: "Measure Line" },
      { id: "mapTips", icon: ICON, tooltip: "Show Map Tips" },
      { id: "featureAction", icon: ICON, tooltip: "Run Feature Action" },
    ],
  },
];
