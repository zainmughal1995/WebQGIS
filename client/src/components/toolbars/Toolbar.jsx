import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleToolbar, reorderToolbars } from "../../store/toolbarSlice";
import { togglePanel } from "../../store/panelSlice";

import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

const Toolbar = ({ toolbarComponents }) => {
  const dispatch = useDispatch();
  const { toolbars, order } = useSelector((s) => s.toolbars);
  const panels = useSelector((s) => s.panels.panels);

  const [contextMenu, setContextMenu] = useState(null);

  /* ---------------- Drag ---------------- */

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = order.indexOf(active.id);
    const newIndex = order.indexOf(over.id);

    dispatch(reorderToolbars(arrayMove(order, oldIndex, newIndex)));
  };

  /* ---------------- Context Menu ---------------- */

  const handleContextMenu = (e) => {
    e.preventDefault();
    setContextMenu({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      className="w-full bg-[#f3f3f3] border-b border-gray-300 relative z-50"
    >
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={order} strategy={horizontalListSortingStrategy}>
          <div className="flex flex-wrap items-center">
            {order.map((id) => toolbars[id] && toolbarComponents[id])}
          </div>
        </SortableContext>
      </DndContext>

      {/* Unified Context Menu */}
      {contextMenu && (
        <div
          className="absolute bg-white border border-gray-300 shadow-md z-50 text-sm min-w-[220px]"
          style={{ top: contextMenu.y, left: contextMenu.x }}
          onMouseLeave={() => setContextMenu(null)}
        >
          {/* Toolbars */}
          <div className="px-3 py-1 text-xs font-semibold text-gray-500">
            Toolbars
          </div>

          {order.map((id) => (
            <div
              key={id}
              onClick={() => dispatch(toggleToolbar(id))}
              className="flex items-center gap-2 px-3 py-1 hover:bg-[#e6e6e6] cursor-pointer"
            >
              <input type="checkbox" checked={toolbars[id]} readOnly />
              <span className="capitalize">{id}</span>
            </div>
          ))}

          <div className="border-t border-gray-300 my-1" />

          {/* Panels */}
          <div className="px-3 py-1 text-xs font-semibold text-gray-500">
            Panels
          </div>

          {Object.keys(panels).map((id) => (
            <div
              key={id}
              onClick={() => dispatch(togglePanel(id))}
              className="flex items-center gap-2 px-3 py-1 hover:bg-[#e6e6e6] cursor-pointer"
            >
              <input type="checkbox" checked={panels[id]} readOnly />
              <span className="capitalize">{id}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Toolbar;
