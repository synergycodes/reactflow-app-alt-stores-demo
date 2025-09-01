import type { SupportedNodeTypes } from "@ts";
import ExampleNode from "./ExampleNode";

export const nodeTypes: Record<
  SupportedNodeTypes,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (x: any) => React.ReactNode
> = {
  example: ExampleNode,
};
