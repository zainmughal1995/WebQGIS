import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ToolButton from "../../common/ToolButton";

import newProjectIcon from "../../../assets/icons/toolbar_project/new_project.png";
import openProjectIcon from "../../../assets/icons/toolbar_project/open_project.png";
import saveProjectIcon from "../../../assets/icons/toolbar_project/save_project.png";
import newLayoutManagerIcon from "../../../assets/icons/toolbar_project/new_print_layout.png";
import layoutManagerIcon from "../../../assets/icons/toolbar_project/show_layout_manager.png";
import styleManagerIcon from "../../../assets/icons/toolbar_project/style_manager.png";

// ✅ NEW
import {
  createProject,
  saveProjectSnapshot,
} from "../../../store/projectSlice";

const ICONS = {
  newProject: newProjectIcon,
  openProject: openProjectIcon,
  saveProject: saveProjectIcon,
  newLayout: newLayoutManagerIcon,
  layoutManager: layoutManagerIcon,
  styleManager: styleManagerIcon,
};

const ProjectToolbar = () => {
  const dispatch = useDispatch();

  // ✅ We grab full state required to save project
  const layers = useSelector((s) => s.layers);
  const features = useSelector((s) => s.features);
  const currentProject = useSelector((s) => s.project.currentProject);

  // ✅ NEW PROJECT
  const handleNewProject = () => {
    const name = prompt("Enter project name:");
    if (!name) return;

    dispatch(createProject({ name }));
  };

  // ✅ SAVE PROJECT
  const handleSaveProject = () => {
    if (!currentProject) {
      alert("No active project.");
      return;
    }

    const snapshot = {
      layers,
      features,
    };

    dispatch(saveProjectSnapshot(snapshot));

    console.log("===== PROJECT SAVED =====");
    console.log({
      ...currentProject,
      layers: snapshot,
    });
  };

  return (
    <div className="flex items-center px-2 py-1 border-b border-gray-200 gap-1">
      <ToolButton
        icon={ICONS.newProject}
        tooltip="New Project"
        onClick={handleNewProject}
      />

      <ToolButton icon={ICONS.openProject} tooltip="Open Project" />

      <ToolButton
        icon={ICONS.saveProject}
        tooltip="Save Project"
        onClick={handleSaveProject}
      />
      <ToolButton icon={ICONS.newLayout} tooltip="New Print Layout" />

      <ToolButton icon={ICONS.layoutManager} tooltip="Show Layout Manager" />

      <ToolButton icon={ICONS.styleManager} tooltip="Style Manager" />
    </div>
  );
};

export default ProjectToolbar;
