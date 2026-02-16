const ICON =
  "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/square.svg";
// import deselectAllIcon from "../assets/icons/deselect_all.svg";
// import identifyFeaturesIcon from "../assets/icons/identify_features.svg";
// import measureLineIcon from "../assets/icons/measure_line.svg";
// import new3dMapViewIcon from "../assets/icons/new_3d_map_view.svg";
// import newMapView from "../assets/icons/new_map_view.svg";
// import newPrintLayoutIcon from "../assets/icons/new_print_layout.svg";
// import newProjectIcon from "../assets/icons/new_project.svg";
// import newSpatialBookmarkIcon from "../assets/icons/new_spatial_bookmark.svg";
// import openAttributeTableIcon from "../assets/icons/open_attribute_table.svg";
// import openFieldCalculatorIcon from "../assets/icons/open_field_calculator.svg";
// import openProjectIcon from "../assets/icons/open_project.svg";
// import panMapIcon from "../assets/icons/pan_map.svg";
// import panToSelectionIcon from "../assets/icons/pan_to_selection.svg";
// import refreshIcon from "../assets/icons/refresh.svg";
// import runFeatureActionIcon from "../assets/icons/run_feature_action.svg";
// import saveProjectIcon from "../assets/icons/save_project.svg";
// import selectByLocationIcon from "../assets/icons/select_by_location.svg";
// import selectByValueIcon from "../assets/icons/select_by_value.svg";
// import selectFeatureIcon from "../assets/icons/select_feature.svg";
// import showLayoutManagerIcon from "../assets/icons/show_layout_manager.svg";
// import showMapTipsIcon from "../assets/icons/show_map_tips.svg";
// import showSpatialBookmarksIcon from "../assets/icons/show_spatial_bookmarks.svg";
// import statisticalSummaryIcon from "../assets/icons/statistical_summary.svg";
// import styleManagerIcon from "../assets/icons/style_manager.svg";
// import temporalControllerIcon from "../assets/icons/temporal_controller.svg";
// import toolboxIcon from "../assets/icons/toolbox.svg";
// import zoomFullIcon from "../assets/icons/zoom_full.svg";
// import zoomInIcon from "../assets/icons/zoom_in.svg";
// import zoomLastIcon from "../assets/icons/zoom_last.svg";
// import zoomNextIcon from "../assets/icons/zoom_next.svg";
// import zoomOutIcon from "../assets/icons/zoom_out.svg";
// import zoomToLayerIcon from "../assets/icons/zoom_to_layer.svg";
// import zoomToNativeResolutionIcon from "../assets/icons/zoom_to_native_resolution.svg";
// import zoomToSelectionIcon from "../assets/icons/zoom_to_selection.svg";

export const TOOLBAR_CONFIG = [
  {
    id: "project",
    tools: [
      { id: "newProject", icon: ICON, tooltip: "New Project" },
      { id: "openProject", icon: ICON, tooltip: "Open Project" },
      { id: "saveProject", icon: ICON, tooltip: "Save Project" },
      {
        id: "newPrintLayout",
        icon: ICON,
        tooltip: "New Print Layout",
      },
      {
        id: "layoutManager",
        icon: ICON,
        tooltip: "Show Layout Manager",
      },
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
