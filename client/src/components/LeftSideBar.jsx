import { useState } from "react";
import LayersPanel from "./LayersPanel";

/* ---------------- Panel Wrapper ---------------- */

function Panel({ title, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-[#cfcfcf]">
      <div
        onClick={() => setOpen(!open)}
        className="
          h-7 px-2 flex items-center justify-between
          bg-[#e9e9e9] text-[13px]
          cursor-pointer hover:bg-[#dedede]
          select-none
        "
      >
        <span>{title}</span>
        <span className="text-[11px]">{open ? "▾" : "▸"}</span>
      </div>

      {open && <div className="bg-[#f5f5f5] text-[13px]">{children}</div>}
    </div>
  );
}

/* ---------------- Browser Panel ---------------- */

function BrowserTree() {
  const items = [
    "Favorites",
    "Spatial Bookmarks",
    "Home",
    "C:",
    "GeoPackage",
    "SpatiaLite",
    "PostgreSQL",
    "WMS/WMTS",
    "Cloud",
  ];

  return (
    <div className="py-1 select-none">
      {items.map((i) => (
        <div
          key={i}
          className="px-3 py-[3px] hover:bg-[#dcdcdc] cursor-default"
        >
          ▸ {i}
        </div>
      ))}
    </div>
  );
}

/* ---------------- Main Sidebar ---------------- */

export default function LeftSidebar() {
  return (
    <div
      className="
        w-[260px] h-full
        bg-[#f0f0f0]
        border-r border-[#cfcfcf]
        flex flex-col
      "
    >
      <Panel title="Browser">
        <BrowserTree />
        <LayersPanel />
      </Panel>
    </div>
  );
}
