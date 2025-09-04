import { ReactFlowProvider } from "@xyflow/react";

import { ConnectionMakerProvider } from "@/versions/shared/contexts-features/connectionMaker/provider";
import NodeTools from "@/versions/shared/contexts-components/NodeTools";

import Diagram from "./Diagram";
import Palette from "./Palette";

const Flow = () => (
  <ReactFlowProvider>
    <ConnectionMakerProvider>
      <Diagram />
      <Palette />
      <NodeTools />
    </ConnectionMakerProvider>
  </ReactFlowProvider>
);

export default Flow;
