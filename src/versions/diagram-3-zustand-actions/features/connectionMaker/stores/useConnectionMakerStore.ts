import { create } from "zustand";

export type ConnectionMakerStoreState = {
  sourceNodeId: string | null;
};

const useConnectionMakerStore = create<ConnectionMakerStoreState>(() => ({
  sourceNodeId: null,
}));

export const setSourceNodeId = (
  sourceNodeId: ConnectionMakerStoreState["sourceNodeId"]
) => {
  useConnectionMakerStore.setState({
    sourceNodeId,
  });
};

export default useConnectionMakerStore;
