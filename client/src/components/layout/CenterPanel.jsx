import React from "react";
import MapView from "../map/MapView";

const CenterPanel = () => {
  return (
    <div className="h-full w-full bg-white relative overflow-hidden z-0">
      <MapView />
    </div>
  );
};

export default CenterPanel;
