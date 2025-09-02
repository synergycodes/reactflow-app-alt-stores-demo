import { createContext } from "react";

export const ConnectionMakerContext = createContext<{
  sourceNodeId: string | null;
  setSourceNodeId: (type: string | null) => void;
}>({
  sourceNodeId: null,
  setSourceNodeId: () => {},
});
