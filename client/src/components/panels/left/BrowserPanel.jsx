import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setBasemap } from "../../../store/mapSlice";

/* ---------------- Data ---------------- */

const ROOT_ITEMS = [
  "Favorites",
  "Spatial Bookmarks",
  "Home",
  "C:\\",
  "G:\\ (Google Drive)",
  "GeoPackage",
  "SpatiaLite",
  "PostgreSQL",
  "SAP HANA",
  "STAC",
  "MS SQL Server",
  "Oracle",
  "WMS/WMTS",
  "Cloud",
  "Scenes",
  "SensorThings",
  "Vector Tiles",
  "XYZ Tiles",
  "WCS",
  "WFS / OGC API - Features",
  "ArcGIS REST Servers",
];

const BASEMAPS = [
  { id: "satellite", label: "Satellite" },
  { id: "osm", label: "OpenStreetMap" },
  { id: "satellite", label: "Topo Map" },
  { id: "cartoLight", label: "Carto Light" },
  { id: "cartoDark", label: "Carto Dark" },
  { id: "stamenToner", label: "Stamen Toner" },
];

/* ---------------- Component ---------------- */

const BrowserPanel = () => {
  const dispatch = useDispatch();
  const [xyzOpen, setXyzOpen] = useState(false);

  return (
    <div className="flex flex-col h-full bg-[#f0f0f0] border-b border-[#cfcfcf] text-[12px]">
      {/* ---- Dock Header ---- */}
      <div className="flex items-center justify-between px-2 py-[3px] bg-[#e6e6e6] border-b border-[#cfcfcf] font-medium">
        <span>Browser</span>

        {/* Placeholder window icons */}
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 flex items-center justify-center border border-gray-500 text-[11px] leading-none cursor-pointer select-none">
            ×
          </div>
        </div>
      </div>

      {/* ---- Toolbar Row ---- */}
      <div className="flex items-center gap-2 px-2 py-[3px] border-b border-[#cfcfcf] bg-[#f5f5f5]">
        <div className="w-4 h-4 bg-gray-400 rounded-sm" />
        <div className="w-4 h-4 bg-gray-400 rounded-sm" />
        <div className="w-4 h-4 bg-gray-400 rounded-sm" />
        <div className="w-4 h-4 bg-gray-400 rounded-sm" />
        <div className="w-4 h-4 bg-gray-400 rounded-sm" />
      </div>

      {/* ---- Tree ---- */}
      <div className="flex-1 overflow-auto bg-[#f8f8f8]">
        {ROOT_ITEMS.map((item, index) => {
          /* ---------- XYZ Tiles (Expandable) ---------- */
          if (item === "XYZ Tiles") {
            return (
              <div key={index}>
                <div
                  onClick={() => setXyzOpen(!xyzOpen)}
                  className="flex items-center gap-2 px-2 py-[2px] hover:bg-[#dcdcdc] cursor-pointer"
                >
                  <span className="text-[10px] text-gray-600 w-3">
                    {xyzOpen ? "▾" : "▸"}
                  </span>

                  <div className="w-4 h-4 bg-gray-500 rounded-sm flex-shrink-0" />

                  <span>XYZ Tiles</span>
                </div>

                {xyzOpen && (
                  <div className="ml-6">
                    {BASEMAPS.map((bm) => (
                      <div
                        key={bm.id}
                        onClick={() => dispatch(setBasemap(bm.id))}
                        className="flex items-center gap-2 px-2 py-[2px] hover:bg-[#dcdcdc] cursor-pointer"
                      >
                        <div className="w-3 h-3 bg-blue-500 rounded-sm flex-shrink-0" />
                        <span className="leading-none">{bm.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          /* ---------- Default Items ---------- */
          return (
            <div
              key={index}
              className="flex items-center gap-2 px-2 py-[2px] hover:bg-[#dcdcdc] cursor-pointer"
            >
              <span className="text-[10px] text-gray-600 w-3">▸</span>

              <div className="w-4 h-4 bg-gray-500 rounded-sm flex-shrink-0" />

              <span className="leading-none">{item}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BrowserPanel;
