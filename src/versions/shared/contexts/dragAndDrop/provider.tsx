import { useState, type PropsWithChildren } from "react";
import { DragAndDropContext } from "./context";
import type { SupportedNodeTypes } from "@ts";

export const DragAndDropProvider = ({ children }: PropsWithChildren) => {
  const [draggedType, setDraggedType] = useState<SupportedNodeTypes | null>(
    null
  );

  return (
    <DragAndDropContext.Provider value={{ draggedType, setDraggedType }}>
      {children}
    </DragAndDropContext.Provider>
  );
};
