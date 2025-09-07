import { useCallback, useState, type PropsWithChildren } from "react";
import { ConnectionMakerContext } from "./context";
import type { ConnectionMakerStatus } from "./types";
import { addEdge, useReactFlow, type Edge } from "@xyflow/react";

type ContextData = {
  status: ConnectionMakerStatus;
  sourceNodeId: string | null;
};

const initialState: ContextData = {
  status: "setSource",
  sourceNodeId: null,
};

export const ConnectionMakerProvider = ({ children }: PropsWithChildren) => {
  const { setEdges } = useReactFlow();
  const [{ status, sourceNodeId }, setContextData] =
    useState<ContextData>(initialState);

  const cancelLinking = useCallback(() => {
    setContextData(initialState);
  }, []);

  const handleSetSourceNodeId = useCallback(
    (sourceNodeId: string | null) => {
      if (!sourceNodeId) {
        cancelLinking();

        return;
      }

      setContextData({
        status: "setTarget",
        sourceNodeId,
      });
    },
    [cancelLinking]
  );

  const handleSetTargetNodeId = useCallback(
    (targetNodeId: string | null) => {
      if (sourceNodeId && targetNodeId) {
        const newEdge: Edge = {
          id: crypto.randomUUID(),
          source: sourceNodeId,
          target: targetNodeId,
        };

        setEdges((edges) => addEdge<Edge>(newEdge, edges));

        setContextData(initialState);
      }
    },
    [setEdges, sourceNodeId]
  );

  return (
    <ConnectionMakerContext.Provider
      value={{
        status,
        sourceNodeId,
        cancelLinking,
        setSourceNodeId: handleSetSourceNodeId,
        connectWithNode: handleSetTargetNodeId,
      }}
    >
      {children}
    </ConnectionMakerContext.Provider>
  );
};
