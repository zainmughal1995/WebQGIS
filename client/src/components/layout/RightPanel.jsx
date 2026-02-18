import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglePanel } from "../../store/panelSlice";

/* ---------------- Toolbox Categories ---------------- */

const TOOLBOX_ITEMS = [
  "Recently used",
  "3D Tiles",
  "Cartography",
  "Database",
  "File tools",
  "GPS",
  "Interpolation",
  "Layer tools",
  "Mesh",
  "Network analysis",
  "Plots",
  "Raster analysis",
  "Raster creation",
  "Raster terrain analysis",
  "Raster tools",
  "Vector analysis",
  "Vector coverage",
  "Vector creation",
  "Vector general",
  "Vector geometry",
  "Vector overlay",
  "Vector selection",
  "Vector table",
  "Vector tiles",
];

const RightPanel = () => {
  const dispatch = useDispatch();
  const panels = useSelector((s) => s.panels.panels);
  const isVisible = panels.rightPanel ?? true; // fallback safety

  return (
    <div
      className={`
        h-full flex flex-col bg-[#f0f0f0]
        border-l border-[#cfcfcf]
        overflow-hidden
        transition-all duration-300 ease-in-out
        ${isVisible ? "w-72 opacity-100" : "w-0 opacity-0"}
      `}
    >
      {/* ---- Dock Header ---- */}
      <div className="flex items-center justify-between px-2 py-1 bg-[#e6e6e6] border-b border-[#cfcfcf] text-[13px] font-medium">
        <span>Processing Toolbox</span>

        <div
          onClick={() => dispatch(togglePanel("rightPanel"))}
          className="w-4 h-4 flex items-center justify-center border border-gray-500 text-[11px] leading-none cursor-pointer select-none hover:bg-[#e0e0e0]"
        >
          ×
        </div>
      </div>

      {/* ---- Toolbar Row ---- */}
      <div className="flex items-center gap-2 px-2 py-1 border-b border-[#cfcfcf] bg-[#f5f5f5]">
        <div className="w-4 h-4 bg-red-500 rounded-sm" />
        <div className="w-4 h-4 bg-blue-500 rounded-sm" />
        <div className="w-4 h-4 bg-gray-400 rounded-sm" />
        <div className="w-4 h-4 bg-gray-300 rounded-sm" />
        <div className="w-4 h-4 bg-yellow-500 rounded-sm" />
      </div>

      {/* ---- Search ---- */}
      <div className="px-2 py-1 border-b border-[#cfcfcf] bg-[#f5f5f5]">
        <input
          type="text"
          placeholder="Search..."
          className="
            w-full px-2 py-[3px]
            text-[13px]
            border border-[#cfcfcf]
            bg-white
            outline-none
          "
        />
      </div>

      {/* ---- Scrollable Content ---- */}
      <div className="flex-1 overflow-auto text-[11px] bg-[#f8f8f8]">
        {TOOLBOX_ITEMS.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-2 py-0.5 hover:bg-[#dcdcdc] cursor-pointer"
          >
            <span className="text-[11px] text-gray-600">▸</span>
            <div className="w-4 h-4 bg-green-600 rounded-sm" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightPanel;
