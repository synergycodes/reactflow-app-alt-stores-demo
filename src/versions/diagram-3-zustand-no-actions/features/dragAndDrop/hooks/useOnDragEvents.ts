import { useCallback } from "react";
import { useReactFlow, type Node, type XYPosition } from "@xyflow/react";
import { generateId } from "@/utils/generateId";
import useGlobalStore from "../../../stores/useGlobalStore";
import useDragAndDropStore from "../stores/useDragAndDropStore";

export const useOnDragEvents = () => {
  const { screenToFlowPosition } = useReactFlow();
  const addNode = useGlobalStore((state) => state.addNode);
  const draggedType = useDragAndDropStore((state) => state.draggedType);
  const setDraggedType = useDragAndDropStore((state) => state.setDraggedType);

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const addNodeOnDropIfDragged = useCallback(
    (position: XYPosition) => {
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
      setDraggedType(null);
    },
    [addNode, draggedType, setDraggedType]
  );

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

      addNodeOnDropIfDragged(position);
    },
    [addNodeOnDropIfDragged, draggedType, screenToFlowPosition]
  );

  return {
    onDragOver,
    onDrop,
  };
};
