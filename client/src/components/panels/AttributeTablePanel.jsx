import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeAttributeTable } from "../../store/uiSlice";
import AttributeTable from "../tables/AttributeTable";

export default function AttributeTablePanel() {
  const dispatch = useDispatch();
  const open = useSelector((s) => s.ui.attributeTableOpen);
  const activeLayerId = useSelector((s) => s.layers.activeLayerId);
  const features = useSelector((s) => s.features.byLayer[activeLayerId] || []);

  const [height, setHeight] = useState(300);
  const resizing = useRef(false);

  if (!open) return null;

  const startResize = () => {
    resizing.current = true;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);
  };

  const handleResize = (e) => {
    if (!resizing.current) return;

    const newHeight = window.innerHeight - e.clientY;
    if (newHeight > 150 && newHeight < window.innerHeight - 100) {
      setHeight(newHeight);
    }
  };

  const stopResize = () => {
    resizing.current = false;
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResize);
  };

  return (
    <div
      className="absolute bottom-0 left-0 right-0 bg-white border-t z-[9998] flex flex-col shadow-lg"
      style={{ height }}
    >
      {/* Resize Handle */}
      <div
        onMouseDown={startResize}
        className="h-2 cursor-row-resize bg-gray-300 hover:bg-gray-400"
      />

      {/* Blue Header */}
      <div className="bg-[#1f2d8f] text-white text-sm px-3 py-1 flex justify-between items-center">
        <span>
          asd — Features Total: {features.length}, Filtered: {features.length},
          Selected: 0
        </span>
        <button onClick={() => dispatch(closeAttributeTable())}>✕</button>
      </div>

      {/* Toolbar */}
      <div className="bg-[#e6e6e6] border-b px-2 py-1 flex gap-2 items-center text-gray-700 text-xs">
        <div className="w-4 h-4 bg-gray-400 rounded-sm" />
        <div className="w-4 h-4 bg-gray-400 rounded-sm" />
        <div className="w-4 h-4 bg-gray-400 rounded-sm" />
        <div className="w-4 h-4 bg-gray-400 rounded-sm" />
        <div className="w-4 h-4 bg-gray-400 rounded-sm" />
      </div>

      {/* Table */}
      <div className="flex-1 overflow-auto bg-white">
        <AttributeTable />
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#f2f2f2] border-t px-2 py-1 text-xs flex justify-between">
        <select className="border text-xs px-1 py-[2px]">
          <option>Show All Features</option>
        </select>

        <div className="flex gap-1">
          <div className="w-5 h-5 border bg-white" />
          <div className="w-5 h-5 border bg-white" />
        </div>
      </div>
    </div>
  );
}
