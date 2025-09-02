import { ReactFlowProvider } from "@xyflow/react";
import { DragAndDropProvider } from "../contexts/dragAndDrop/provider";
import Diagram from "./Diagram";
import Palette from "./Palette";

const Flow = () => (
  <ReactFlowProvider>
    <DragAndDropProvider>
      <Diagram />
      <Palette />
    </DragAndDropProvider>
  </ReactFlowProvider>
);

export default Flow;
