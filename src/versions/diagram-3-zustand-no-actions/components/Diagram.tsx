import { ReactFlow, Background } from "@xyflow/react";
import { useShallow } from "zustand/shallow";
import { nodeTypes } from "@/components/nodes";
import RerenderCounter from "@/components/dev/RerenderCounter";
import useGlobalStore, {
  type GlobalStoreState,
} from "../stores/useGlobalStore";
import { useOnDragEvents } from "../hooks/useOnDragEvents";

const selector = (state: GlobalStoreState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onConnect: state.onConnect,
  onEdgesChange: state.onEdgesChange,
  onNodesChange: state.onNodesChange,
});

export const Diagram = () => {
  const { nodes, edges, onConnect, onEdgesChange, onNodesChange } =
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
        <Background color="#b9bfca" size={2} gap={35} />
        <RerenderCounter />
      </ReactFlow>
    </div>
  );
};

export default Diagram;
