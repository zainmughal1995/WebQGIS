import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleLayer } from "../store/layersSlice";
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

/* ---------------- Layer Icons ---------------- */

function LayerIcon({ type }) {
  if (type === "point")
    return <div className="w-3 h-3 rounded-full bg-red-500" />;
  if (type === "line") return <div className="w-4 h-[2px] bg-blue-500" />;
  if (type === "polygon") return <div className="w-3 h-3 bg-green-600" />;
  return null;
}

/* ---------------- Layers Panel ---------------- */

function LayersPanel() {
  const layers = useSelector((s) => s.layers);
  const dispatch = useDispatch();

  return (
    <div className="flex-1 bg-[#f8f8f8] py-1">
      {layers.map((l) => (
        <div
          key={l.id}
          className="flex items-center gap-2 px-2 py-[3px] hover:bg-[#dcdcdc]"
        >
          <input
            type="checkbox"
            checked={l.visible}
            onChange={() => dispatch(toggleLayer(l.id))}
          />

          <LayerIcon type={l.geomType} />
          <span>{l.name}</span>
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
      </Panel>

      <Panel title="Layers">
        <LayersPanel />
      </Panel>
    </div>
  );
}
