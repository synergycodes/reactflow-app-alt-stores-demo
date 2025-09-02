import type { SupportedNodeTypes } from "@ts";
import { createContext } from "react";

export const DragAndDropContext = createContext<{
  draggedType: SupportedNodeTypes | null;
  setDraggedType: (type: SupportedNodeTypes | null) => void;
}>({
  draggedType: null,
  setDraggedType: () => {},
});
