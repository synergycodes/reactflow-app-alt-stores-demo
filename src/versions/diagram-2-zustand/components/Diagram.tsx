import { ReactFlow, Background } from "@xyflow/react";
import { nodeTypes } from "@/components/nodes";
import RerenderCounter from "@/components/dev/RerenderCounter";
import { useShallow } from "zustand/shallow";
import useGlobalStore, { type GlobalStoreState } from "../stores/useGlobalStore";
import { useOnDragEvents } from "../hooks/useOnDragEvents";

const selector = (state: GlobalStoreState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const Diagram = () => {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } =
    useGlobalStore(useShallow(selector));

  const { onDragOver, onDrop } = useOnDragEvents();

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
