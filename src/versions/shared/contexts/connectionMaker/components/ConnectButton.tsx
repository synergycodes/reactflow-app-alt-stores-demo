import { useGetSelectedNodeId } from "@/components/hooks/useGetSelectedNodeId";
import IconEdgeStart from "@/components/icons/IconEdgeStart";
import Button from "@/components/ui/Button";
import { useCallback, useMemo } from "react";
import { useConnectionMarkerContext } from "../hooks/useConnectionMarkerContext";
import IconEdgeEnd from "@/components/icons/IconEdgeEnd";
import { addEdge, useReactFlow, type Edge } from "@xyflow/react";

type Props = {
  className?: string;
};

const ConnectButton = ({ className }: Props) => {
  const { setEdges } = useReactFlow();
  const selectedNodeId = useGetSelectedNodeId();
  const { sourceNodeId, setSourceNodeId } = useConnectionMarkerContext();

  const type: "setSource" | "removeSource" | "setTarget" = useMemo(() => {
    if (sourceNodeId) {
      if (sourceNodeId === selectedNodeId) {
        return "removeSource";
      }

      if (selectedNodeId) {
        return "setTarget";
      }

      return "removeSource";
    }

    return "setSource";
  }, [selectedNodeId, sourceNodeId]);

  const handleClick = useCallback(() => {
    if (type === "setSource") {
      setSourceNodeId(selectedNodeId);

      return;
    }

    if (type === "removeSource") {
      setSourceNodeId(null);

      return;
    }

    if (sourceNodeId && selectedNodeId) {
      const newEdge: Edge = {
        id: crypto.randomUUID(),
        source: sourceNodeId,
        target: selectedNodeId,
      };

      setEdges((edges) => addEdge<Edge>(newEdge, edges));

      setSourceNodeId(null);
    }
  }, [type, sourceNodeId, selectedNodeId, setSourceNodeId, setEdges]);

  if (!selectedNodeId && !sourceNodeId) {
    return null;
  }

  return (
    <Button className={className} onClick={handleClick}>
      {type === "setSource" && (
        <>
          <IconEdgeStart className="size-6" />
          <span>Link to other node</span>
        </>
      )}
      {type === "removeSource" && (
        <>
          <IconEdgeStart className="size-6" />
          <span>Cancel linking</span>
        </>
      )}
      {type === "setTarget" && (
        <>
          <IconEdgeEnd className="size-6" />
          <span>Create a link</span>
        </>
      )}
    </Button>
  );
};

export default ConnectButton;
