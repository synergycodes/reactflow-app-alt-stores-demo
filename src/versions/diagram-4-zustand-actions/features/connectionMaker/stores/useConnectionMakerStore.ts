import type { Edge } from "@xyflow/react";
import { create } from "zustand";
import { onConnect } from "@/versions/diagram-4-zustand-actions/stores/useGlobalStore";
import type { ConnectionMakerStatus } from "../types";

export type ConnectionMakerStoreState = {
  status: ConnectionMakerStatus;
  sourceNodeId: string | null;
};

const initialState: ConnectionMakerStoreState = {
  status: "setSource",
  sourceNodeId: null,
};

const useConnectionMakerStore = create<ConnectionMakerStoreState>(
  () => initialState
);

export const cancelLinking = () => {
  useConnectionMakerStore.setState(initialState);
};

export const setSourceNodeId = (sourceNodeId: string | null) => {
  if (!sourceNodeId) {
    cancelLinking();

    return;
  }

  useConnectionMakerStore.setState({
    status: "setTarget",
    sourceNodeId,
  });
};

export const connectWithNode = (targetNodeId: string) => {
  const sourceNodeId = useConnectionMakerStore.getState().sourceNodeId;

  if (sourceNodeId && targetNodeId) {
    const newEdge: Edge = {
      id: crypto.randomUUID(),
      source: sourceNodeId,
      target: targetNodeId,
    };

    onConnect(newEdge);

    setSourceNodeId(null);
  }
};

export default useConnectionMakerStore;
