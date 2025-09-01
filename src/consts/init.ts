import type { Edge, Node } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    type: "example",
    id: "A",
    position: { x: 0, y: 0 },
    data: { label: "Node A" },
  },
  {
    type: "example",
    id: "B",
    position: { x: 300, y: 100 },
    data: { label: "Node B" },
  },
];

export const initialEdges: Edge[] = [{ id: "A->B", source: "A", target: "B" }];
