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
};

const useGlobalStore = create<GlobalStoreState>(() => ({
  nodes: initialNodes,
  edges: initialEdges,
}));

export const onNodesChange = (changes: NodeChange<Node>[]) => {
  useGlobalStore.setState((state) => ({
    nodes: applyNodeChanges(changes, state.nodes),
  }));
};

export const onEdgesChange = (changes: EdgeChange<Edge>[]) => {
  useGlobalStore.setState((state) => ({
    edges: applyEdgeChanges(changes, state.edges),
  }));
};

export const onConnect = (connection: Connection | Edge) => {
  useGlobalStore.setState((state) => ({
    edges: addEdge(connection, state.edges),
  }));
};

export const setNodes = (nodes: Node[]) => {
  useGlobalStore.setState({
    nodes,
  });
};

export const addNode = (node: Node) => {
  useGlobalStore.setState((state) => ({
    nodes: [...state.nodes, node],
  }));
};

export const setEdges = (edges: Edge[]) => {
  useGlobalStore.setState({
    edges,
  });
};

export default useGlobalStore;
