// Get these icons, sort them into their respective folders first for each toolbar

const ICON =
  "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/square.svg";
import deselectAllIcon from "../assets/icons/deselect_all.png";
import identifyFeaturesIcon from "../assets/icons/identify_features.png";
import measureLineIcon from "../assets/icons/measure_line.png";
import new3dMapViewIcon from "../assets/icons/new_3d_map_view.png";
import newMapViewIcon from "../assets/icons/new_map_view.png";
import newPrintLayoutIcon from "../assets/icons/new_print_layout.png";
import newProjectIcon from "../assets/icons/new_project.png";
import newSpatialBookmarkIcon from "../assets/icons/new_spatial_bookmark.png";
import openAttributeTableIcon from "../assets/icons/open_attribute_table.png";
import openFieldCalculatorIcon from "../assets/icons/open_field_calculator.png";
import openProjectIcon from "../assets/icons/open_project.png";
import panMapIcon from "../assets/icons/pan_map.png";
import panToSelectionIcon from "../assets/icons/pan_to_selection.png";
import refreshIcon from "../assets/icons/refresh.png";
import runFeatureActionIcon from "../assets/icons/run_feature_action.png";
import saveProjectIcon from "../assets/icons/save_project.png";
import selectByLocationIcon from "../assets/icons/select_by_location.png";
import selectByValueIcon from "../assets/icons/select_by_value.png";
import selectFeatureIcon from "../assets/icons/select_feature.png";
import showLayoutManagerIcon from "../assets/icons/show_layout_manager.png";
import showMapTipsIcon from "../assets/icons/show_map_tips.png";
import showSpatialBookmarksIcon from "../assets/icons/show_spatial_bookmarks.png";
import statisticalSummaryIcon from "../assets/icons/statistical_summary.png";
import styleManagerIcon from "../assets/icons/style_manager.png";
import temporalControllerIcon from "../assets/icons/temporal_controller.png";
import toolboxIcon from "../assets/icons/toolbox.png";
import zoomFullIcon from "../assets/icons/zoom_full.png";
import zoomInIcon from "../assets/icons/zoom_in.png";
import zoomLastIcon from "../assets/icons/zoom_last.png";
import zoomNextIcon from "../assets/icons/zoom_next.png";
import zoomOutIcon from "../assets/icons/zoom_out.png";
import zoomToLayerIcon from "../assets/icons/zoom_to_layer.png";
import zoomToNativeResolutionIcon from "../assets/icons/zoom_to_native_resolution.png";
import zoomToSelectionIcon from "../assets/icons/zoom_to_selection.png";

export const BOTTOMBAR_CONFIG = [
  {
    id: "project",
    tools: [
      { id: "newProject", icon: newProjectIcon, tooltip: "New Project" },
      { id: "openProject", icon: openProjectIcon, tooltip: "Open Project" },
      { id: "saveProject", icon: saveProjectIcon, tooltip: "Save Project" },
      {
        id: "newPrintLayout",
        icon: newPrintLayoutIcon,
        tooltip: "New Print Layout",
      },
      {
        id: "layoutManager",
        icon: showLayoutManagerIcon,
        tooltip: "Show Layout Manager",
      },
      { id: "styleManager", icon: styleManagerIcon, tooltip: "Style Manager" },
    ],
  },

  {
    id: "navigation",
    tools: [
      { id: "pan", icon: panMapIcon, tooltip: "Pan Map" },
      {
        id: "panToSelection",
        icon: panToSelectionIcon,
        tooltip: "Pan to Selection",
      },
      { id: "zoomIn", icon: zoomInIcon, tooltip: "Zoom In" },
      { id: "zoomOut", icon: zoomOutIcon, tooltip: "Zoom Out" },
      { id: "zoomFull", icon: zoomFullIcon, tooltip: "Zoom Full" },
      {
        id: "zoomToSelection",
        icon: zoomToSelectionIcon,
        tooltip: "Zoom to Selection",
      },
      { id: "zoomToLayer", icon: zoomToLayerIcon, tooltip: "Zoom to Layer" },
      {
        id: "zoomNative",
        icon: zoomToNativeResolutionIcon,
        tooltip: "Zoom to Native Resolution",
      },
      { id: "zoomLast", icon: zoomLastIcon, tooltip: "Zoom Last" },
      { id: "zoomNext", icon: zoomNextIcon, tooltip: "Zoom Next" },
      { id: "newMapView", icon: newMapViewIcon, tooltip: "New Map View" },
      {
        id: "new3DMapView",
        icon: new3dMapViewIcon,
        tooltip: "New 3D Map View",
      },
      {
        id: "newBookmark",
        icon: newSpatialBookmarkIcon,
        tooltip: "New Spatial Bookmark",
      },
      {
        id: "showBookmarks",
        icon: showSpatialBookmarksIcon,
        tooltip: "Show Spatial Bookmarks",
      },
      {
        id: "temporal",
        icon: temporalControllerIcon,
        tooltip: "Temporal Controller",
      },
      { id: "refresh", icon: refreshIcon, tooltip: "Refresh" },
    ],
  },

  {
    id: "selection",
    tools: [
      {
        id: "selectClick",
        icon: selectFeatureIcon,
        tooltip: "Select Feature (Click)",
      },
      {
        id: "selectValue",
        icon: selectByValueIcon,
        tooltip: "Select by Value",
      },
      { id: "deselectAll", icon: deselectAllIcon, tooltip: "Deselect All" },
      {
        id: "selectLocation",
        icon: selectByLocationIcon,
        tooltip: "Select by Location",
      },
    ],
  },

  {
    id: "attributes",
    tools: [
      {
        id: "identify",
        icon: identifyFeaturesIcon,
        tooltip: "Identify Features",
      },
      {
        id: "fieldCalc",
        icon: openFieldCalculatorIcon,
        tooltip: "Open Field Calculator",
      },
      { id: "toolbox", icon: toolboxIcon, tooltip: "Toolbox" },
      {
        id: "stats",
        icon: statisticalSummaryIcon,
        tooltip: "Statistical Summary",
      },
      {
        id: "attributeTable",
        icon: openAttributeTableIcon,
        tooltip: "Open Attribute Table",
      },
      { id: "measure", icon: measureLineIcon, tooltip: "Measure Line" },
      { id: "mapTips", icon: showMapTipsIcon, tooltip: "Show Map Tips" },
      {
        id: "featureAction",
        icon: runFeatureActionIcon,
        tooltip: "Run Feature Action",
      },
    ],
  },
];
