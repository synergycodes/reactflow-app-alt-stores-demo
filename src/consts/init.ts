import type { SupportedNodeTypes } from "@ts";
import type { Edge, Node } from "@xyflow/react";

export const PALETTE_NODES_TYPES: SupportedNodeTypes[] = [
  "cat",
  "dog",
  "pig",
  "wolf",
];

export const initialNodes: Node[] = [
  {
    type: "dog",
    id: "dog_cyan_9wmzm",
    position: { x: 0, y: 0 },
    data: {},
  },
  {
    type: "cat",
    id: "cat_organe_9wm2y",
    position: { x: 300, y: 100 },
    data: {},
  },
];

export const initialEdges: Edge[] = [
  { id: "1", source: "dog_cyan_9wmzm", target: "cat_organe_9wm2y" },
];
