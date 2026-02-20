import React from "react";
import ToolButton from "../../common/ToolButton";

import panIcon from "../../../assets/icons/toolbar_navigation/pan_map.png";
import panToSelectedIcon from "../../../assets/icons/toolbar_navigation/pan_to_selection.png";
import zoomInIcon from "../../../assets/icons/toolbar_navigation/zoom_in.png";
import zoomOutIcon from "../../../assets/icons/toolbar_navigation/zoom_out.png";
import zoomFullIcon from "../../../assets/icons/toolbar_navigation/zoom_full.png";
import zoomToSelectionIcon from "../../../assets/icons/toolbar_navigation/zoom_to_selection.png";
import zoomToLayerIcon from "../../../assets/icons/toolbar_navigation/zoom_to_layer.png";
import zoomNativeIcon from "../../../assets/icons/toolbar_navigation/zoom_to_native_resolution.png";
import zoomLastIcon from "../../../assets/icons/toolbar_navigation/zoom_last.png";
import zoomNextIcon from "../../../assets/icons/toolbar_navigation/zoom_next.png";
import newMapIcon from "../../../assets/icons/toolbar_navigation/new_map_view.png";
import new3DIcon from "../../../assets/icons/toolbar_navigation/new_3d_map_view.png";
import newBookmarkIcon from "../../../assets/icons/toolbar_navigation/new_spatial_bookmark.png";
import showBookmarksIcon from "../../../assets/icons/toolbar_navigation/show_spatial_bookmarks.png";
import temporalIcon from "../../../assets/icons/toolbar_navigation/temporal_controller.png";
import refreshIcon from "../../../assets/icons/toolbar_navigation/refresh.png";

const ICONS = {
  pan: panIcon,
  panToSelected: panToSelectedIcon,
  zoomIn: zoomInIcon,
  zoomOut: zoomOutIcon,
  zoomFull: zoomFullIcon,
  zoomToSelection: zoomToSelectionIcon,
  zoomToLayer: zoomToLayerIcon,
  zoomNative: zoomNativeIcon,
  zoomLast: zoomLastIcon,
  zoomNext: zoomNextIcon,
  newMap: newMapIcon,
  new3D: new3DIcon,
  newBookmark: newBookmarkIcon,
  showBookmarks: showBookmarksIcon,
  temporal: temporalIcon,
  refresh: refreshIcon,
};

const NavigationToolbar = () => {
  return (
    <div className="flex items-center px-2 py-1 border-b border-gray-200 gap-1">
      <ToolButton icon={ICONS.pan} tooltip="Pan Map" />

      <ToolButton
        icon={ICONS.panToSelected}
        tooltip="Pan to Selected Features"
      />

      <ToolButton icon={ICONS.zoomIn} tooltip="Zoom In" />
      <ToolButton icon={ICONS.zoomOut} tooltip="Zoom Out" />
      <ToolButton icon={ICONS.zoomFull} tooltip="Zoom Full" />

      <ToolButton icon={ICONS.zoomToSelection} tooltip="Zoom to Selection" />

      <ToolButton icon={ICONS.zoomToLayer} tooltip="Zoom to Layer" />
      <ToolButton icon={ICONS.zoomNative} tooltip="Zoom to Native Resolution" />

      <ToolButton icon={ICONS.zoomLast} tooltip="Zoom Last" />
      <ToolButton icon={ICONS.zoomNext} tooltip="Zoom Next" />

      <ToolButton icon={ICONS.newMap} tooltip="New Map View" />
      <ToolButton icon={ICONS.new3D} tooltip="New 3D Map View" />

      <ToolButton icon={ICONS.newBookmark} tooltip="New Spatial Bookmark" />

      <ToolButton icon={ICONS.showBookmarks} tooltip="Show Spatial Bookmarks" />

      <ToolButton icon={ICONS.temporal} tooltip="Temporal Controller Panel" />

      <ToolButton icon={ICONS.refresh} tooltip="Refresh" />
    </div>
  );
};

export default NavigationToolbar;
