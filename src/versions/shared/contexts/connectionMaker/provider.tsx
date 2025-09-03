import { useState, type PropsWithChildren } from "react";
import { ConnectionMakerContext } from "./context";

export const ConnectionMakerProvider = ({ children }: PropsWithChildren) => {
  const [sourceNodeId, setSourceNodeId] = useState<string | null>(null);

  return (
    <ConnectionMakerContext.Provider
      value={{
        sourceNodeId,
        setSourceNodeId,
      }}
    >
      {children}
    </ConnectionMakerContext.Provider>
  );
};
