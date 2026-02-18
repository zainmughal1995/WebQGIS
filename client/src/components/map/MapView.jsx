import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { useSelector } from "react-redux";
import "leaflet/dist/leaflet.css";

/* ---------------- Basemaps ---------------- */

const BASEMAPS = {
  osm: {
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    attribution: "© OpenStreetMap",
  },
  satellite: {
    url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
    attribution: "Tiles © Esri",
  },
};

/* ---------------- Resize Handler ---------------- */

function ResizeHandler() {
  const map = useMap();

  const rightPanelVisible = useSelector((s) => s.panels.panels.rightPanel);

  const leftWidth = useSelector((s) => s.layout.leftPanelWidth);

  useEffect(() => {
    const timer = setTimeout(() => {
      map.invalidateSize({ debounceMoveend: true });
    }, 50);

    return () => clearTimeout(timer);
  }, [rightPanelVisible, leftWidth, map]);

  return null;
}

/* ---------------- Map Events ---------------- */

function MapEvents({ setContextData }) {
  useMapEvents({
    contextmenu(e) {
      e.originalEvent.preventDefault();

      setContextData({
        x: e.originalEvent.clientX,
        y: e.originalEvent.clientY,
        lat: e.latlng.lat,
        lng: e.latlng.lng,
      });
    },
    click() {
      setContextData(null);
    },
  });

  return null;
}

/* ---------------- MapView ---------------- */

const MapView = () => {
  const basemap = useSelector((s) => s.map.basemap);
  const current = BASEMAPS[basemap] || BASEMAPS.osm;

  const [contextData, setContextData] = useState(null);

  const copyCoords = () => {
    if (!contextData) return;

    const text = `${contextData.lat.toFixed(6)}, ${contextData.lng.toFixed(6)}`;

    navigator.clipboard.writeText(text).catch(() => {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    });

    setContextData(null);
  };

  return (
    <div className="relative h-full w-full">
      <MapContainer
        center={[30.3753, 69.3451]}
        zoom={6}
        zoomControl={false}
        className="h-full w-full"
      >
        <TileLayer
          key={basemap}
          url={current.url}
          attribution={current.attribution}
        />

        <ZoomControl position="bottomright" />

        <ResizeHandler />
        <MapEvents setContextData={setContextData} />
      </MapContainer>

      {/* Context Menu OUTSIDE leaflet */}
      {contextData && (
        <div
          className="fixed bg-white border border-gray-300 shadow-md text-[12px] z-[9999]"
          style={{
            top: contextData.y,
            left: contextData.x,
          }}
        >
          <div
            onClick={copyCoords}
            className="px-3 py-1 hover:bg-[#e6e6e6] cursor-pointer"
          >
            Copy Coordinate
          </div>
        </div>
      )}
    </div>
  );
};

export default MapView;
