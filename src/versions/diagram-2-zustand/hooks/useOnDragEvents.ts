import { useCallback } from "react";
import { useReactFlow } from "@xyflow/react";
import { generateId } from "@/utils/generateId";
import { useDragAndDropContext } from "@/versions/shared/contexts/dragAndDrop/hooks/useDragAndDropContext";
import { useShallow } from "zustand/shallow";
import useGlobalStore, { type GlobalStoreState } from "../stores/global";

const selector = (state: GlobalStoreState) => ({
  addNode: state.addNode,
});

export const useOnDragEvents = () => {
  const { addNode } = useGlobalStore(useShallow(selector));
  const { screenToFlowPosition } = useReactFlow();
  const { draggedType, setDraggedType } = useDragAndDropContext();

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!draggedType) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: generateId(draggedType),
        type: draggedType,
        position,
        data: {},
      };

      setDraggedType(null);

      addNode(newNode);
    },
    [draggedType, screenToFlowPosition, setDraggedType, addNode]
  );

  return {
    onDragOver,
    onDrop,
  };
};
