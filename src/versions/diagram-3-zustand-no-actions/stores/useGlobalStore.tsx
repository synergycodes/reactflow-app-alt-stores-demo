import { create } from "zustand";
import {
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  type Node,
  type Edge,
  type EdgeChange,
  type NodeChange,
  type Connection,
} from "@xyflow/react";

import { initialEdges, initialNodes } from "@/consts/init";

export type GlobalStoreState = {
  nodes: Node[];
  edges: Edge[];
  onNodesChange: (changes: NodeChange<Node>[]) => void;
  onEdgesChange: (changes: EdgeChange<Edge>[]) => void;
  onConnect: (edge: Edge | Connection) => void;
  setNodes: (nodes: Node[]) => void;
  addNode: (node: Node) => void;
  setEdges: (edge: Edge[]) => void;
};

const useGlobalStore = create<GlobalStoreState>((set, get) => ({
  nodes: initialNodes,
  edges: initialEdges,
  onNodesChange: (changes) => {
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    });
  },
  onEdgesChange: (changes) => {
    set({
      edges: applyEdgeChanges(changes, get().edges),
    });
  },
  onConnect: (edge) => {
    set({
      edges: addEdge(edge, get().edges),
    });
  },
  setNodes: (nodes) => {
    set({
      nodes,
    });
  },
  addNode: (node) => {
    set({
      nodes: [...get().nodes, node],
    });
  },
  setEdges: (edges: Edge[]) => {
    set({
      edges,
    });
  },
}));

export default useGlobalStore;
