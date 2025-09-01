import { ReactFlowProvider } from "@xyflow/react";
import { DragAndDropContextProvider } from "../contexts/dragAndDrop/provider";
import Diagram from "./Diagram";
import Palette from "./Palette";

const Flow = () => (
  <ReactFlowProvider>
    <DragAndDropContextProvider>
      <Diagram />
      <Palette />
    </DragAndDropContextProvider>
  </ReactFlowProvider>
);

export default Flow;
