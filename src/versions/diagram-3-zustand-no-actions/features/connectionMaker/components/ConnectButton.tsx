import Button from "@/components/ui/Button";
import { useCallback } from "react";
import { type Edge } from "@xyflow/react";

import { useGetSelectedNodeId } from "@/components/hooks/useGetSelectedNodeId";
import IconEdgeStart from "@/components/icons/IconEdgeStart";
import IconEdgeEnd from "@/components/icons/IconEdgeEnd";
import useGlobalStore from "../../../stores/useGlobalStore";
import useConnectionMakerStore from "../stores/useConnectionMakerStore";

type Props = {
  className?: string;
};

const ConnectButton = ({ className }: Props) => {
  const selectedNodeId = useGetSelectedNodeId();
  const onConnect = useGlobalStore((state) => state.onConnect);
  const status = useConnectionMakerStore((state) => state.status);
  const sourceNodeId = useConnectionMakerStore((state) => state.sourceNodeId);
  const cancelLinking = useConnectionMakerStore((state) => state.cancelLinking);
  const setSourceNodeId = useConnectionMakerStore(
    (state) => state.setSourceNodeId
  );

  const connectWithNode = useCallback(
    (targetNodeId: string) => {
      const sourceNodeId = useConnectionMakerStore.getState().sourceNodeId;

      if (sourceNodeId && targetNodeId) {
        const newEdge: Edge = {
          id: crypto.randomUUID(),
          source: sourceNodeId,
          target: targetNodeId,
        };

        onConnect(newEdge);

        setSourceNodeId(null);
      }
    },
    [onConnect, setSourceNodeId]
  );

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
          onClick={() => connectWithNode(selectedNodeId)}
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
