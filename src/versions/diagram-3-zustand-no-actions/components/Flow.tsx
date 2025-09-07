import { ReactFlowProvider } from "@xyflow/react";

import Diagram from "./Diagram";
import Palette from "./Palette";
import NodeTools from "./NodeTools";

const Flow = () => (
  <ReactFlowProvider>
    <Diagram />
    <Palette />
    <NodeTools />
  </ReactFlowProvider>
);

export default Flow;
