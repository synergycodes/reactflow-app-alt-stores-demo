import { memo } from "react";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

import NodePanel from "./parts/NodePanel";
import NodeTitle from "./parts/NodeTitle";
import { defaultHandleStyles } from "./consts";
import IconByNodeType from "../icons/IconByNodeType";

type Props = NodeProps<Node>;

const handleTopPosition = 25;

const ExampleNode = ({ id, isConnectable, selected }: Props) => {
  return (
    <NodePanel className="" isSelected={selected}>
      <Handle
        style={{
          ...defaultHandleStyles,
          top: handleTopPosition,
        }}
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
      <NodeTitle>
        <IconByNodeType type="example" className="size-6" />
        <span>Id: {id}</span>
      </NodeTitle>
      <p className="text-sm text-zinc-500">Example node.</p>
      <Handle
        style={{
          ...defaultHandleStyles,
          top: handleTopPosition,
        }}
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
    </NodePanel>
  );
};

export default memo(ExampleNode);
