import { create } from "zustand";
import type { SupportedNodeTypes } from "@ts";

export type DragAndDropStoreState = {
  draggedType: SupportedNodeTypes | null;
  setDraggedType: (draggedType: SupportedNodeTypes | null) => void;
};

const useDragAndDropStore = create<DragAndDropStoreState>((set) => ({
  draggedType: null,
  setDraggedType: (draggedType) => {
    set({
      draggedType,
    });
  },
}));

export default useDragAndDropStore;
