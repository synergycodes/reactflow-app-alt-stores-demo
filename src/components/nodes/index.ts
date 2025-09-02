import type { SupportedNodeTypes } from "@ts";
import BaseNode from "./BaseNode";

export const nodeTypes: Record<
  SupportedNodeTypes,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (x: any) => React.ReactNode
> = {
  cat: BaseNode,
  dog: BaseNode,
  pig: BaseNode,
  wolf: BaseNode,
};
