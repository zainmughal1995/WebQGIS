import React from "react";
import ToolButton from "../../common/ToolButton";

const ICONS = {
  pan: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/move.svg",
  panToSelected:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/locate.svg",
  zoomIn: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/zoom-in.svg",
  zoomOut:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/zoom-out.svg",
  zoomFull:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/maximize.svg",
  zoomToSelection:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/target.svg",
  zoomToLayer:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/layers.svg",
  zoomNative:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/square-dashed.svg",
  zoomLast:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/arrow-left.svg",
  zoomNext:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/arrow-right.svg",
  newMap: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/map.svg",
  new3D: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/box.svg",
  newBookmark:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/bookmark-plus.svg",
  showBookmarks:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/bookmark.svg",
  temporal: "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/clock.svg",
  refresh:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/refresh-cw.svg",
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
