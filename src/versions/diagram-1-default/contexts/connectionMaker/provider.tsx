import { useState, type PropsWithChildren } from "react";
import { ConnectionMakerContext } from "./context";
import type { SupportedNodeTypes } from "@ts";

export const ConnectionMakerProvider = ({ children }: PropsWithChildren) => {
  const [startId, setType] = useState<SupportedNodeTypes | null>(null);

  return (
    <ConnectionMakerContext.Provider value={[type, setType]}>
      {children}
    </ConnectionMakerContext.Provider>
  );
};
