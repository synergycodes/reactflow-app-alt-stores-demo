import { create } from "zustand";
import type { ConnectionMakerStatus } from "../types";

export type ConnectionMakerStoreState = {
  status: ConnectionMakerStatus;
  sourceNodeId: string | null;
  cancelLinking: () => void;
  setSourceNodeId: (sourceNodeId: string | null) => void;
};

const initialState: Pick<ConnectionMakerStoreState, "status" | "sourceNodeId"> =
  {
    status: "setSource",
    sourceNodeId: null,
  };

const useConnectionMakerStore = create<ConnectionMakerStoreState>(
  (set, get) => ({
    ...initialState,
    cancelLinking: () => {
      set({
        ...initialState,
      });
    },
    setSourceNodeId: (sourceNodeId) => {
      if (!sourceNodeId) {
        get().cancelLinking();

        return;
      }

      set({
        status: "setTarget",
        sourceNodeId,
      });
    },
  })
);

export default useConnectionMakerStore;
