import { create } from "zustand";
import { type Node, type XYPosition } from "@xyflow/react";
import type { SupportedNodeTypes } from "@ts";
import { generateId } from "@/utils/generateId";
import { addNode } from "@/versions/diagram-4-zustand-actions/stores/useGlobalStore";

export type DragAndDropStoreState = {
  draggedType: SupportedNodeTypes | null;
};

const useDragAndDropStore = create<DragAndDropStoreState>(() => ({
  draggedType: null,
}));

export const setDraggedType = (
  draggedType: DragAndDropStoreState["draggedType"]
) => {
  useDragAndDropStore.setState({
    draggedType,
  });
};

export const addNodeOnDropIfDragged = (position: XYPosition) => {
  const draggedType = useDragAndDropStore.getState().draggedType;

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

  useDragAndDropStore.setState({
    draggedType: null,
  });
};

export default useDragAndDropStore;
