import { useContext } from "react";
import { DragAndDropContext } from "./context";

export const useDragAndDropContext = () => {
  return useContext(DragAndDropContext);
};
