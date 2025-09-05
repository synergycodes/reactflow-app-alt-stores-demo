import {
  addEdge,
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type Connection,
  Background,
} from "@xyflow/react";
import { useCallback } from "react";
import { nodeTypes } from "@/components/nodes";
import { initialEdges, initialNodes } from "@/consts/init";
import RerenderCounter from "@/components/dev/RerenderCounter";
import { useOnDragEvents } from "../hooks/useOnDragEvents";

export const Diagram = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);

  const onConnect = useCallback(
    (params: Connection) => setEdges((edges) => addEdge(params, edges)),
    [setEdges]
  );

  const { onDragOver, onDrop } = useOnDragEvents({ setNodes });

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
