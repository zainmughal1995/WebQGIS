import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  ZoomControl,
  useMap,
  useMapEvents,
  GeoJSON,
} from "react-leaflet";
import L from "leaflet";
import "leaflet-draw";
import { useSelector, useDispatch } from "react-redux";
import { addFeature, setLayerFeatures } from "../../store/featuresSlice";
import { stopDrawing } from "../../store/uiSlice";
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

/* ---------------- Drawing + Editing Controller ---------------- */

function DrawingController() {
  const map = useMap();
  const dispatch = useDispatch();

  const activeLayerId = useSelector((s) => s.layers.activeLayerId);
  const layers = useSelector((s) => s.layers.items);
  const featuresByLayer = useSelector((s) => s.features.byLayer);
  const editingEnabled = useSelector((s) => s.ui.editingEnabled);
  const drawingMode = useSelector((s) => s.ui.drawingMode);
  const activeTool = useSelector((s) => s.ui.activeTool);

  const activeLayer = layers.find((l) => l.id === activeLayerId);

  const drawRef = useRef(null);
  const editableGroup = useRef(new L.FeatureGroup());
  const editHandler = useRef(null);
  const pendingEdits = useRef(null); // 🔥 stores unsaved edits

  useEffect(() => {
    map.addLayer(editableGroup.current);
  }, [map]);

  /* -------- Sync Active Layer -------- */

  useEffect(() => {
    editableGroup.current.clearLayers();

    if (!featuresByLayer[activeLayerId]) return;

    featuresByLayer[activeLayerId].forEach((feature) => {
      const geoLayer = L.geoJSON(feature);
      geoLayer.eachLayer((layer) => {
        editableGroup.current.addLayer(layer);
      });
    });
  }, [activeLayerId, featuresByLayer]);

  /* -------- Draw -------- */

  useEffect(() => {
    if (!editingEnabled || !drawingMode || !activeLayer) return;

    if (drawRef.current) {
      drawRef.current.disable();
      drawRef.current = null;
    }

    if (activeLayer.geomType === "point")
      drawRef.current = new L.Draw.Marker(map);

    if (activeLayer.geomType === "line")
      drawRef.current = new L.Draw.Polyline(map);

    if (activeLayer.geomType === "polygon")
      drawRef.current = new L.Draw.Polygon(map);

    drawRef.current?.enable();

    const onCreated = (e) => {
      const geojson = e.layer.toGeoJSON();

      dispatch(
        addFeature({
          layerId: activeLayerId,
          feature: geojson,
        }),
      );

      dispatch(stopDrawing());
    };

    map.on(L.Draw.Event.CREATED, onCreated);

    return () => {
      map.off(L.Draw.Event.CREATED, onCreated);
    };
  }, [editingEnabled, drawingMode, activeLayer]);

  /* -------- Vertex Tool -------- */

  useEffect(() => {
    if (!editingEnabled || activeTool !== "vertex") {
      if (editHandler.current) {
        editHandler.current.disable();
        editHandler.current = null;
      }
      map.dragging.enable();
      return;
    }

    map.dragging.disable();

    editHandler.current = new L.EditToolbar.Edit(map, {
      featureGroup: editableGroup.current,
    });

    editHandler.current.enable();

    const captureEdits = () => {
      const updated = [];

      editableGroup.current.eachLayer((layer) => {
        updated.push(layer.toGeoJSON());
      });

      pendingEdits.current = updated; // 🔥 store edits but DO NOT save
    };

    map.on(L.Draw.Event.EDITSTOP, captureEdits);

    return () => {
      map.off(L.Draw.Event.EDITSTOP, captureEdits);
      map.dragging.enable();
    };
  }, [editingEnabled, activeTool]);

  /* -------- Save Handler (Toolbar Save Button will dispatch event) -------- */

  useEffect(() => {
    const saveListener = () => {
      if (!pendingEdits.current) return;

      dispatch(
        setLayerFeatures({
          layerId: activeLayerId,
          features: pendingEdits.current,
        }),
      );

      pendingEdits.current = null;
    };

    window.addEventListener("saveLayerEdits", saveListener);

    return () => {
      window.removeEventListener("saveLayerEdits", saveListener);
    };
  }, [dispatch, activeLayerId]);

  return null;
}

/* ---------------- MapView ---------------- */

const MapView = () => {
  const basemap = useSelector((s) => s.map.basemap);
  const featuresByLayer = useSelector((s) => s.features.byLayer);
  const activeLayerId = useSelector((s) => s.layers.activeLayerId);
  const activeTool = useSelector((s) => s.ui.activeTool);

  const current = BASEMAPS[basemap] || BASEMAPS.osm;
  const [contextData, setContextData] = useState(null);

  const copyCoords = () => {
    if (!contextData) return;
    const text = `${contextData.lat.toFixed(6)}, ${contextData.lng.toFixed(6)}`;
    navigator.clipboard.writeText(text);
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
        <DrawingController />

        {Object.entries(featuresByLayer).map(([layerId, features]) => {
          if (layerId === activeLayerId && activeTool === "vertex") return null;

          return features.map((feature, index) => (
            <GeoJSON key={`${layerId}-${index}`} data={feature} />
          ));
        })}
      </MapContainer>

      {contextData && (
        <div
          className="fixed bg-white border border-gray-300 shadow-md text-[12px] z-[9999]"
          style={{ top: contextData.y, left: contextData.x }}
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
