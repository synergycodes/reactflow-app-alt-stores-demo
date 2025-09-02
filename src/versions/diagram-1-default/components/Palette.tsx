import type { SupportedNodeTypes } from "@ts";
import { cn } from "@/utils/cn";
import { PALETTE_NODES_TYPES } from "@/consts/init";
import IconByNodeType from "@/components/icons/IconByNodeType";
import { useDragAndDropContext } from "../contexts/dragAndDrop/useDragAndDropContext";

export default function Palette() {
  const { setDraggedType } = useDragAndDropContext();

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: SupportedNodeTypes
  ) => {
    setDraggedType(nodeType);
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
        <div className="text-sm text-zinc-500 mb-5">
          You can drag these nodes to the pane on the right.
        </div>
        {PALETTE_NODES_TYPES.map((type) => (
          <div
            key={type}
            className={cn(
              "flex gap-3 align-middle justify-between",
              "rounded-xl py-2 px-4",
              "text-gray-500 font-semibold bg-white",
              "border border-zinc-50 shadow"
            )}
            onDragStart={(event) => onDragStart(event, type)}
            draggable
          >
            <IconByNodeType type={type} className="size-6 text-black" />
            <span className="capitalize">{type} node</span>
          </div>
        ))}
      </div>
    </aside>
  );
}
