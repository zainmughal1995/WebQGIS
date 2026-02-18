import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import BrowserPanel from "../../components/panels/left/BrowserPanel";
import LayersPanel from "../../components/panels/left/LayersPanel";

import { setLeftPanelWidth } from "../../store/layoutSlice";

const panelComponents = {
  browser: <BrowserPanel />,
  layers: <LayersPanel />,
};

const MIN_WIDTH = 200;
const MAX_WIDTH = 500;

const LeftPanel = () => {
  const panels = useSelector((s) => s.panels.panels);

  const dispatch = useDispatch();
  const width = useSelector((s) => s.layout.leftPanelWidth);
  const resizing = useRef(false);

  /* ---------------- Resize Logic ---------------- */

  const startResize = () => {
    resizing.current = true;
    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);
  };

  const handleResize = (e) => {
    if (!resizing.current) return;

    let newWidth = e.clientX;

    if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH;
    if (newWidth > MAX_WIDTH) newWidth = MAX_WIDTH;

    dispatch(setLeftPanelWidth(newWidth));
  };

  const stopResize = () => {
    resizing.current = false;
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResize);
  };

  return (
    <div
      style={{ width }}
      className="h-full flex flex-col bg-[#f8f8f8] border-r border-gray-300 relative z-60"
    >
      {/* Panels Rendered Dynamically */}
      {Object.keys(panelComponents).map((id) => {
        if (!panels[id]) return null;

        return (
          <div
            key={id}
            className={
              id === "browser"
                ? "h-[260px] overflow-auto border-b border-[#cfcfcf]"
                : "flex-1 overflow-hidden"
            }
          >
            {panelComponents[id]}
          </div>
        );
      })}

      {/* Resize Handle */}
      <div
        onMouseDown={startResize}
        className="
          absolute top-0 right-0
          w-1 h-full
          cursor-col-resize
          hover:bg-gray-400
        "
      />
    </div>
  );
};

export default LeftPanel;
