import Topbar from "./components/Topbar";
import Toolbar from "./components/Toolbar";
import LeftSidebar from "./components/LeftSideBar";
import CenterPanel from "./components/CenterPanel";
import RightPanel from "./components/RightPanel";
import ToolModal from "./components/ToolModal";
import LayersPanel from "./components/LayersPanel";

import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "./store/uiSlice";
import { addLayer } from "./store/layersSlice";
import { TOOL_SCHEMAS } from "./tools/toolSchemas";

export default function App() {
  const dispatch = useDispatch();
  const { modalOpen, activeTool } = useSelector((s) => s.ui);

  const schema = TOOL_SCHEMAS[activeTool];

  // ✅ must be INSIDE component
  const handleRun = (values) => {
    if (activeTool === "createLayer") {
      dispatch(
        addLayer({
          id: crypto.randomUUID(),
          name: values.name || "Untitled Layer",
          geomType: values.geomType || "point",
          visible: true,
          features: [],
        }),
      );
    }

    console.log("Run tool:", activeTool, values);

    dispatch(closeModal());
  };

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <Topbar />
      <Toolbar />

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        <LeftSidebar />
        <CenterPanel />
        <RightPanel />
      </div>

      {/* Generic Tool Modal */}
      {schema && (
        <ToolModal
          open={modalOpen}
          title={schema.title}
          toolTitle={schema.toolTitle}
          description={schema.description}
          fields={schema.fields}
          runLabel={schema.runLabel}
          onClose={() => dispatch(closeModal())}
          onRun={handleRun}
        />
      )}
    </div>
  );
}
