import Button from "@/components/ui/Button";
import { useCallback, useMemo } from "react";
import { addEdge, useReactFlow, type Edge } from "@xyflow/react";

import { useGetSelectedNodeId } from "@/components/hooks/useGetSelectedNodeId";
import IconEdgeStart from "@/components/icons/IconEdgeStart";
import IconEdgeEnd from "@/components/icons/IconEdgeEnd";
import useConnectionMakerStore, {
  cancelLinking,
  setSourceNodeId,
  setTargetNodeId,
} from "../stores/useConnectionMakerStore";

type Props = {
  className?: string;
};

const ConnectButton = ({ className }: Props) => {
  const selectedNodeId = useGetSelectedNodeId();
  const status = useConnectionMakerStore((state) => state.status);
  const sourceNodeId = useConnectionMakerStore((state) => state.sourceNodeId);

  if (status === "setSource") {
    return (
      <Button
        className={className}
        onClick={() => setSourceNodeId(selectedNodeId)}
      >
        <IconEdgeStart className="size-6" />
        <span>Link to other node</span>
      </Button>
    );
  }

  if (status === "setTarget") {
    const isSelectedAndNotSource =
      selectedNodeId && selectedNodeId !== sourceNodeId;
    if (isSelectedAndNotSource) {
      return (
        <Button
          className={className}
          onClick={() => setTargetNodeId(selectedNodeId)}
        >
          <IconEdgeEnd className="size-6" />
          <span>Create a connection</span>
        </Button>
      );
    }

    return (
      <Button
        className={className}
        onClick={cancelLinking}
        variant="destructive"
      >
        <IconEdgeStart className="size-6" />
        <span>Cancel linking</span>
      </Button>
    );
  }

  return null;
};

export default ConnectButton;
