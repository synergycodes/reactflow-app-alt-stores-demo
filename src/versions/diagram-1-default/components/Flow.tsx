import { ReactFlowProvider } from "@xyflow/react";

import { ConnectionMakerProvider } from "../features/connectionMaker/provider";
import { DragAndDropProvider } from "../features/dragAndDrop/provider";

import Diagram from "./Diagram";
import Palette from "./Palette";
import NodeTools from "./NodeTools";

const Flow = () => (
  <ReactFlowProvider>
    <ConnectionMakerProvider>
      <DragAndDropProvider>
        <Diagram />
        <Palette />
        <NodeTools />
      </DragAndDropProvider>
    </ConnectionMakerProvider>
  </ReactFlowProvider>
);

export default Flow;
