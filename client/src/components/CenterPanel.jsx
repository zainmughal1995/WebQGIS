import { useDispatch, useSelector } from "react-redux";
import { openMap } from "../store/uiSlice";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON, useMap } from "react-leaflet";

import { useEffect } from "react";

/* ---------- Resize Fix ---------- */

function ResizeFix() {
  const map = useMap();

  useEffect(() => {
    setTimeout(() => map.invalidateSize(), 0);
  }, [map]);

  return null;
}

export default function CenterPanel() {
  const layers = useSelector((s) => s.layers);
  const hasMap = useSelector((s) => s.ui.hasMap);
  const dispatch = useDispatch();

  // if (!hasMap) return null;

  return (
    <div className="flex-1 h-full bg-[#dcdcdc] relative">
      {/* MAP */}
      {hasMap && (
        <MapContainer
          center={[30, 70]}
          zoom={5}
          className="w-full h-full"
          zoomControl={false}
          preferCanvas={true}
          style={{ zIndex: 0 }}
        >
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ResizeFix />

          {layers
            .filter((l) => l.visible)
            .map((l) => (
              <GeoJSON key={l.id} data={l.data} />
            ))}
        </MapContainer>
      )}

      {/* LOGIN */}
      {!hasMap && (
        <div className="w-full h-full flex items-center justify-center bg-[#efefef]">
          <div className="w-[420px] bg-white border border-[#cfcfcf] shadow-sm p-6 text-[13px]">
            <h2 className="text-[16px] mb-4">Welcome to QGIS Web</h2>

            <div className="space-y-3">
              <input
                placeholder="Username"
                className="w-full border border-[#cfcfcf] px-2 py-1 outline-none focus:border-[#2b79c2]"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full border border-[#cfcfcf] px-2 py-1 outline-none focus:border-[#2b79c2]"
              />

              <button
                onClick={() => dispatch(openMap())}
                className="
                  w-full py-1
                  bg-[#e9e9e9]
                  border border-[#cfcfcf]
                  hover:bg-[#dcdcdc]
                "
              >
                Login / Open Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
