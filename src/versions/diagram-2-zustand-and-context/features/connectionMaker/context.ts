import { createContext } from "react";
import type { ConnectionMakerStatus } from "./types";

export const ConnectionMakerContext = createContext<{
  status: ConnectionMakerStatus;
  sourceNodeId: string | null;
  cancelLinking: () => void;
  setSourceNodeId: (type: string | null) => void;
  connectWithNode: (type: string) => void;
}>({
  status: "setSource",
  sourceNodeId: null,
  cancelLinking: () => {},
  setSourceNodeId: () => {},
  connectWithNode: () => {},
});
