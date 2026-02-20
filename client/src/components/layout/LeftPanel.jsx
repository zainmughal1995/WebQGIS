import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";

import BrowserPanel from "../../components/panels/left/BrowserPanel";
import LayersPanel from "../../components/panels/left/LayersPanel";

import { setLeftPanelWidth } from "../../store/layoutSlice";

const MIN_WIDTH = 200;
const MAX_WIDTH = 500;
const MIN_BROWSER_HEIGHT = 120;

const LeftPanel = () => {
  const panels = useSelector((s) => s.panels.panels);
  const width = useSelector((s) => s.layout.leftPanelWidth);

  const dispatch = useDispatch();

  /* ---------------- Horizontal Resize ---------------- */

  const resizingWidth = useRef(false);

  const startWidthResize = () => {
    resizingWidth.current = true;
    document.body.style.userSelect = "none";
    document.addEventListener("mousemove", handleWidthResize);
    document.addEventListener("mouseup", stopWidthResize);
  };

  const handleWidthResize = (e) => {
    if (!resizingWidth.current) return;

    let newWidth = e.clientX;

    if (newWidth < MIN_WIDTH) newWidth = MIN_WIDTH;
    if (newWidth > MAX_WIDTH) newWidth = MAX_WIDTH;

    dispatch(setLeftPanelWidth(newWidth));
  };

  const stopWidthResize = () => {
    resizingWidth.current = false;
    document.body.style.userSelect = "auto";
    document.removeEventListener("mousemove", handleWidthResize);
    document.removeEventListener("mouseup", stopWidthResize);
  };

  /* ---------------- Vertical Resize (Browser Only) ---------------- */

  const [browserHeight, setBrowserHeight] = useState(260);
  const startY = useRef(0);
  const startHeight = useRef(0);
  const resizingHeight = useRef(false);

  const startHeightResize = (e) => {
    e.preventDefault();
    resizingHeight.current = true;
    startY.current = e.clientY;
    startHeight.current = browserHeight;

    document.body.style.userSelect = "none";

    document.addEventListener("mousemove", handleHeightResize);
    document.addEventListener("mouseup", stopHeightResize);
  };

  const handleHeightResize = (e) => {
    if (!resizingHeight.current) return;

    const delta = e.clientY - startY.current;
    const newHeight = startHeight.current + delta;

    if (newHeight >= MIN_BROWSER_HEIGHT) {
      setBrowserHeight(newHeight);
    }
  };

  const stopHeightResize = () => {
    resizingHeight.current = false;
    document.body.style.userSelect = "auto";
    document.removeEventListener("mousemove", handleHeightResize);
    document.removeEventListener("mouseup", stopHeightResize);
  };

  return (
    <div
      style={{ width }}
      className="h-full flex flex-col bg-[#f8f8f8] border-r border-gray-300 relative"
    >
      {/* -------- Browser Panel -------- */}
      {panels.browser && (
        <div style={{ height: browserHeight }} className="overflow-auto">
          <BrowserPanel />
        </div>
      )}

      {/* -------- Clean Single Splitter -------- */}
      {panels.browser && panels.layers && (
        <div
          onMouseDown={startHeightResize}
          className="relative h-3 cursor-row-resize select-none"
        >
          {/* single clean divider line */}
          <div className="absolute top-1 left-0 right-0 h-[1px] bg-[#d0d0d0]" />
        </div>
      )}

      {/* -------- Layers Panel (flex only, never manually resized) -------- */}
      {panels.layers && (
        <div className="flex-1 overflow-hidden">
          <LayersPanel />
        </div>
      )}

      {/* -------- Horizontal Resize Handle -------- */}
      <div
        onMouseDown={startWidthResize}
        className="absolute top-0 right-0 w-1 h-full cursor-col-resize hover:bg-gray-400"
      />
    </div>
  );
};

export default LeftPanel;
