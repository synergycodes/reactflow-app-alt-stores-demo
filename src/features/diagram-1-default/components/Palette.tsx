import type { SupportedNodeTypes } from "@ts";
import { useDragAndDropContext } from "../contexts/dragAndDrop/useDragAndDropContext";
import { cn } from "@/utils/cn";

export default function Palette() {
  const [, setType] = useDragAndDropContext();

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: SupportedNodeTypes
  ) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="fixed left-0 top-0 z-10">
      <div
        className={cn(
          "flex flex-col gap-3",
          "bg-white w-[300px] h-screen",
          "border-r border-zinc-50 p-4"
        )}
      >
        <div className="text-sm text-zinc-500">
          You can drag these nodes to the pane on the right.
        </div>
        <div
          className="rounded-xl border border-zinc-50 bg-white py-2 px-4 shadow"
          onDragStart={(event) => onDragStart(event, "example")}
          draggable
        >
          Example Node
        </div>
      </div>
    </aside>
  );
}
