import { useOnSelectionChange, type Node } from "@xyflow/react";
import { useCallback, useState } from "react";

export const useGetSelectedNodeId = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const onChange = useCallback(({ nodes }: { nodes: Node[] }) => {
    if (nodes.length === 1) {
      setSelectedNodeId(nodes[0].id);
    } else {
      setSelectedNodeId(null);
    }
  }, []);

  useOnSelectionChange({
    onChange,
  });

  return selectedNodeId;
};
