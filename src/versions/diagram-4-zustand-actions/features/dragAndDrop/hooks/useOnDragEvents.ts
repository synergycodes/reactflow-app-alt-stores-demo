import { useCallback } from "react";
import { useReactFlow } from "@xyflow/react";
import { addNodeOnDropIfDragged } from "../stores/useDragAndDropStore";

export const useOnDragEvents = () => {
  const { screenToFlowPosition } = useReactFlow();

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      addNodeOnDropIfDragged(position);
    },
    [screenToFlowPosition]
  );

  return {
    onDragOver,
    onDrop,
  };
};
