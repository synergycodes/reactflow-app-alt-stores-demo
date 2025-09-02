import {
  addEdge,
  ReactFlow,
  useNodesState,
  useEdgesState,
  type Node,
  type Edge,
  type Connection,
  Background,
  useReactFlow,
} from "@xyflow/react";
import { useCallback, useRef } from "react";
import "@xyflow/react/dist/style.css";
import { nodeTypes } from "@/components/nodes";
import { initialEdges, initialNodes } from "@/consts/init";
import { useDragAndDropContext } from "../contexts/dragAndDrop/hooks/useDragAndDropContext";
import { generateId } from "@/utils/generateId";
import { cn } from "@/utils/cn";
import IconRerender from "@/components/icons/IconRerender";

// React strict mode runs twice in local env
const counterBump = window.location.href.includes("localhost") ? 0.5 : 1;

export const Diagram = () => {
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + counterBump;

  const [nodes, setNodes, onNodesChange] = useNodesState<Node>(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>(initialEdges);
  const { screenToFlowPosition } = useReactFlow();
  const { draggedType, setDraggedType } = useDragAndDropContext();

  const onConnect = useCallback(
    (params: Connection) => setEdges((edges) => addEdge(params, edges)),
    [setEdges]
  );

  const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      if (!draggedType) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode = {
        id: generateId(draggedType),
        type: draggedType,
        position,
        data: {},
      };

      setDraggedType(null);

      setNodes((nds) => nds.concat(newNode));
    },
    [draggedType, screenToFlowPosition, setDraggedType, setNodes]
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
      >
        <Background color="#b9bfca" size={2} gap={30} />
        <button
          className={cn(
            "fixed top-0 right-0 z-10",
            "flex gap-2 items-center",
            "p-4 text-md leading-1",
            "bg-white",
            "border-zinc-50 rounded-bl-xl shadow-md",
            "hover:text-black"
          )}
          onClick={(e) => {
            renderCounter.current = 0;

            const counterEl = (
              e.currentTarget as HTMLElement
            )?.querySelector<HTMLElement>("#rerender-counter");

            if (counterEl) {
              counterEl.innerText = "0";
            }
          }}
          title="Click to reset"
        >
          <IconRerender className="size-5" />
          <span className="text-sm text-zinc-500">
            {"<Diagram \\>"} rerenders
          </span>
          <span id="rerender-counter" className="font-semibold min-w-[5ch]">{renderCounter.current}</span>
        </button>
      </ReactFlow>
    </div>
  );
};

export default Diagram;
