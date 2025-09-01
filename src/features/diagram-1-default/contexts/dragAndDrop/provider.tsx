import { useState, type PropsWithChildren } from "react";
import { DragAndDropContext } from "./context";
import type { SupportedNodeTypes } from "@ts";

export const DragAndDropContextProvider = ({ children }: PropsWithChildren) => {
  const [type, setType] = useState<SupportedNodeTypes | null>(null);

  return (
    <DragAndDropContext.Provider value={[type, setType]}>
      {children}
    </DragAndDropContext.Provider>
  );
};
