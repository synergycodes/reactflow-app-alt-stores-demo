import { create } from "zustand";
import { type Node, type XYPosition } from "@xyflow/react";
import type { SupportedNodeTypes } from "@ts";
import { generateId } from "@/utils/generateId";
import { addNode } from "@/versions/diagram-3-zustand-actions/stores/useGlobalStore";

export type DragAndDropStoreState = {
  draggedType: SupportedNodeTypes | null;
};

const useDragAndDropState = create<DragAndDropStoreState>(() => ({
  draggedType: null,
}));

export const setDraggedType = (
  draggedType: DragAndDropStoreState["draggedType"]
) => {
  useDragAndDropState.setState({
    draggedType,
  });
};

export const addNodeOnDropIfDragged = (position: XYPosition) => {
  const draggedType = useDragAndDropState.getState().draggedType;

  if (!draggedType) {
    return;
  }

  const newNode: Node = {
    id: generateId(draggedType),
    type: draggedType,
    position,
    data: {},
  };

  addNode(newNode);

  useDragAndDropState.setState({
    draggedType: null,
  });
};

export default useDragAndDropState;
