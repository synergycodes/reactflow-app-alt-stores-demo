import { ReactFlow, Background, useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import "@xyflow/react/dist/style.css";
import { nodeTypes } from "@/components/nodes";
import { useDragAndDropContext } from "@/versions/shared/contexts/dragAndDrop/hooks/useDragAndDropContext";
import { generateId } from "@/utils/generateId";
import RerenderCounter from "@/components/dev/RerenderCounter";
import { useShallow } from "zustand/shallow";
import useGlobalStore, { type GlobalStoreState } from "../stores/global";

const selector = (state: GlobalStoreState) => ({
  nodes: state.nodes,
  edges: state.edges,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const Diagram = () => {
  const { nodes, edges, addNode, onNodesChange, onEdgesChange, onConnect } =
    useGlobalStore(useShallow(selector));

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

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      >
        <Background color="#b9bfca" size={2} gap={30} />
        <RerenderCounter />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
