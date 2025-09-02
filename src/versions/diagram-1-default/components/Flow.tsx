import { ReactFlowProvider } from "@xyflow/react";

import { DragAndDropProvider } from "../contexts/dragAndDrop/provider";
import { ConnectionMakerProvider } from "../contexts/connectionMaker/provider";

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
