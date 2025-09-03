import { ReactFlowProvider } from "@xyflow/react";

import { DragAndDropProvider } from "@/versions/shared/contexts/dragAndDrop/provider";
import { ConnectionMakerProvider } from "@/versions/shared/contexts/connectionMaker/provider";
import Palette from "@/versions/shared/contexts-components/Palette";
import NodeTools from "@/versions/shared/contexts-components/NodeTools";

import Diagram from "./Diagram";

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
