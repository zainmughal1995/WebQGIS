import React from "react";
import { useSelector } from "react-redux";
import ToolButton from "../../common/ToolButton";

import identifyFeaturesIcon from "../../../assets/icons/toolbar_attributes/identify_features.png";
import fieldCalcIcon from "../../../assets/icons/toolbar_attributes/open_field_calculator.png";
import toolboxIcon from "../../../assets/icons/toolbar_attributes/toolbox.png";
import statsIcon from "../../../assets/icons/toolbar_attributes/statistical_summary.png";
import attributeTableIcon from "../../../assets/icons/toolbar_attributes/open_attribute_table.png";
import measureIcon from "../../../assets/icons/toolbar_attributes/measure_line.png";
import mapTipsIcon from "../../../assets/icons/toolbar_attributes/show_map_tips.png";
import featureActionIcon from "../../../assets/icons/toolbar_attributes/run_feature_action.png";

const ICONS = {
  identify: identifyFeaturesIcon,
  fieldCalc: fieldCalcIcon,
  toolbox: toolboxIcon,
  stats: statsIcon,
  attributeTable: attributeTableIcon,
  measure: measureIcon,
  mapTips: mapTipsIcon,
  featureAction: featureActionIcon,
};

const AnalysisToolbar = () => {
  const activeLayerId = useSelector((s) => s.layers.activeLayerId);
  const editingEnabled = useSelector((s) => s.ui.editingEnabled);

  const noLayer = !activeLayerId;

  return (
    <div className="flex items-center px-2 py-1 border-b border-gray-200 gap-1">
      <ToolButton
        icon={ICONS.identify}
        tooltip="Identify Features"
        disabled={noLayer}
      />

      <ToolButton
        icon={ICONS.fieldCalc}
        tooltip="Open Field Calculator"
        disabled={noLayer}
      />

      <ToolButton icon={ICONS.toolbox} tooltip="Toolbox" />

      <ToolButton
        icon={ICONS.stats}
        tooltip="Show Statistical Summary"
        disabled={noLayer}
      />

      <ToolButton
        icon={ICONS.attributeTable}
        tooltip="Open Attribute Table"
        disabled={noLayer}
      />

      <ToolButton icon={ICONS.measure} tooltip="Measure Line" />

      <ToolButton icon={ICONS.mapTips} tooltip="Show Map Tips" />

      <ToolButton
        icon={ICONS.featureAction}
        tooltip="Run Feature Action"
        disabled={noLayer || !editingEnabled}
      />
    </div>
  );
};

export default AnalysisToolbar;
