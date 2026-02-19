import React from "react";
import ToolButton from "../../common/ToolButton";

const ICONS = {
  newProject:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/file-plus.svg",
  openProject:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/folder-open.svg",
  saveProject:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/save.svg",
  newLayout:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/printer.svg",
  layoutManager:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/layout.svg",
  styleManager:
    "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/palette.svg",
};

const ProjectToolbar = () => {
  return (
    <div className="flex items-center px-2 py-1 border-b border-gray-200 gap-1">
      <ToolButton icon={ICONS.newProject} tooltip="New Project" />

      <ToolButton icon={ICONS.openProject} tooltip="Open Project" />

      <ToolButton icon={ICONS.saveProject} tooltip="Save Project" />

      <ToolButton icon={ICONS.newLayout} tooltip="New Print Layout" />

      <ToolButton icon={ICONS.layoutManager} tooltip="Show Layout Manager" />

      <ToolButton icon={ICONS.styleManager} tooltip="Style Manager" />
    </div>
  );
};

export default ProjectToolbar;
