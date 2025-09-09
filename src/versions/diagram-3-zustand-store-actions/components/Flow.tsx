import { ReactFlowProvider } from "@xyflow/react";

import Diagram from "./Diagram";
import NodeTools from "./NodeTools";
import Palette from "../features/dragAndDrop/components/Palette";

const Flow = () => (
  <ReactFlowProvider>
    <Diagram />
    <Palette />
    <NodeTools />
  </ReactFlowProvider>
);

export default Flow;
