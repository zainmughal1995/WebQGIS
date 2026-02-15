import { useDispatch, useSelector } from "react-redux";
import { openRightPanel, closeRightPanel } from "../store/uiSlice";

function ProcessingTree() {
  const items = [
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
    "Raster analysis",
    "Raster tools",
    "Vector analysis",
    "Vector creation",
    "Vector geometry",
    "Vector overlay",
    "Vector selection",
    "GDAL",
    "GRASS",
  ];

  return (
    <div className="text-[13px]">
      {items.map((i) => (
        <div key={i} className="px-3 py-[3px] hover:bg-[#dcdcdc]">
          ▸ {i}
        </div>
      ))}
    </div>
  );
}

export default function RightPanel() {
  const dispatch = useDispatch();
  const open = useSelector((s) => s.ui.rightPanelOpen);

  // collapsed tab
  if (!open) {
    return (
      <div className="h-full flex">
        <div
          onClick={() => dispatch(openRightPanel())}
          className="
            w-6 bg-[#e9e9e9]
            border-l border-[#cfcfcf]
            flex items-center justify-center
            cursor-pointer text-[12px]
          "
          style={{ writingMode: "vertical-rl" }}
        >
          Processing
        </div>
      </div>
    );
  }

  return (
    <div
      className="
      w-[300px] h-full
      bg-[#f0f0f0]
      border-l border-[#cfcfcf]
      flex flex-col
    "
    >
      {/* header */}
      <div
        className="
        h-7 bg-[#e9e9e9]
        border-b border-[#cfcfcf]
        flex items-center justify-between px-2 text-[13px]
      "
      >
        <span>Processing Toolbox</span>
        <button
          onClick={() => dispatch(closeRightPanel())}
          className="px-1 hover:bg-[#dcdcdc]"
        >
          ✕
        </button>
      </div>

      {/* search */}
      <div className="p-2 border-b border-[#cfcfcf] bg-[#f5f5f5]">
        <input
          placeholder="Search..."
          className="
            w-full border border-[#cfcfcf]
            px-2 py-1 text-[13px]
            outline-none focus:border-[#2b79c2]
          "
        />
      </div>

      {/* tree */}
      <div className="flex-1 overflow-auto bg-[#f7f7f7]">
        <ProcessingTree />
      </div>
    </div>
  );
}
