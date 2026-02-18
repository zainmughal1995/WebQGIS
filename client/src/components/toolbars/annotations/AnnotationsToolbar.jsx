import React from "react";
import ToolButton from "../../common/ToolButton";

const icon =
  "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/circle.svg";

const AnnotationsToolbar = () => {
  return (
    <div className="flex items-center px-2 py-1 border-b border-gray-200 bg-[#f3f3f3]">
      <ToolButton icon={icon} tooltip="Add Text Annotation" />

      <ToolButton icon={icon} tooltip="Add Form Annotation" />

      <ToolButton icon={icon} tooltip="Add HTML Annotation" />

      <ToolButton icon={icon} tooltip="Add SVG Annotation" />

      <ToolButton icon={icon} tooltip="Move Annotation" />

      <ToolButton icon={icon} tooltip="Delete Annotation" />
    </div>
  );
};

export default AnnotationsToolbar;
