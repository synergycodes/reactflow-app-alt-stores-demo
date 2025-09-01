import type { SupportedNodeTypes } from "@ts";
import { createContext } from "react";

export const DragAndDropContext = createContext<
  [SupportedNodeTypes | null, (type: SupportedNodeTypes | null) => void]
>([null, () => {}]);
