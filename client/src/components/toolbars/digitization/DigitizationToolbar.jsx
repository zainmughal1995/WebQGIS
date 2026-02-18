// src/components/toolbars/digitization/DigitizationToolbar.jsx
import React from "react";
import ToolButton from "../../common/ToolButton";

const icon =
  "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/square.svg";

const DigitizationToolbar = () => {
  return (
    <div className="flex items-center px-2 py-1 border-b border-gray-200">
      <ToolButton icon={icon} tooltip="Add Feature" />
      <ToolButton icon={icon} tooltip="Move Feature" />
      <ToolButton icon={icon} tooltip="Edit Feature" />
      <ToolButton icon={icon} tooltip="Delete Feature" />
    </div>
  );
};

export default DigitizationToolbar;
