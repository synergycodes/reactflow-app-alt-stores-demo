import { useContext } from "react";
import { DragAndDropContext } from "../context";

export const useDragAndDropContext = () => {
  const context = useContext(DragAndDropContext);

  if (!context) {
    throw new Error("Missing context useDragAndDropContext");
  }

  return context;
};
