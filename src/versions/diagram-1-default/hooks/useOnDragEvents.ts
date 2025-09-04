import { useCallback } from "react";
import { useReactFlow, type Node } from "@xyflow/react";
import { generateId } from "@/utils/generateId";
import { useDragAndDropContext } from "@/versions/shared/contexts-features/dragAndDrop/hooks/useDragAndDropContext";

type Params = {
  setNodes: React.Dispatch<React.SetStateAction<Node[]>>;
};

export const useOnDragEvents = ({ setNodes }: Params) => {
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

      const newNode: Node = {
        id: generateId(draggedType),
        type: draggedType,
        position,
        data: {},
      };

      setDraggedType(null);

      setNodes((nds) => nds.concat(newNode));
    },
    [draggedType, screenToFlowPosition, setDraggedType, setNodes]
  );

  return {
    onDragOver,
    onDrop,
  };
};
