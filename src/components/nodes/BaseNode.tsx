import { memo } from "react";
import { Handle, Position, type Node, type NodeProps } from "@xyflow/react";

import { cn } from "@/utils/cn";

import NodePanel from "./parts/NodePanel";
import NodeTitle from "./parts/NodeTitle";
import { defaultHandleStyles } from "./consts";
import IconByNodeType from "../icons/IconByNodeType";
import NodeExplosion from "./parts/NodeExplode";
import type { SupportedNodeTypes } from "@ts";

type Props = NodeProps<Node>;

const handleTopPosition = 25;

const animationText: {
  [type in SupportedNodeTypes]: string;
} = {
  cat: "MEOW!",
  dog: "BARK!",
  pig: "OINK!",
  wolf: "AWOOOO!",
} as const;

const ExampleNode = ({ id, type, isConnectable, selected }: Props) => {
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
        <IconByNodeType
          type={type}
          className={cn("size-6 duration-200", {
            "text-lime-800": selected,
          })}
        />
        <span className="capitalize">{type} node</span>
      </NodeTitle>
      <p className="text-right text-[8px] text-zinc-400 rounded-sm tracking-wider">
        id: {id}
      </p>
      <Handle
        style={{
          ...defaultHandleStyles,
          top: handleTopPosition,
        }}
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
      <NodeExplosion selected={selected}>
        {animationText[type as SupportedNodeTypes] || ""}
      </NodeExplosion>
    </NodePanel>
  );
};

export default memo(ExampleNode);
