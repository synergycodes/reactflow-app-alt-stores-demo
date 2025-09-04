import type { SupportedNodeTypes } from "@ts";
import { cn } from "@/utils/cn";
import { PALETTE_NODES_TYPES } from "@/consts/init";
import IconByNodeType from "@/components/icons/IconByNodeType";
import { useDragAndDropContext } from "../features/dragAndDrop/hooks/useDragAndDropContext";

const Palette = () => {
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
          "flex flex-col gap-3 p-4",
          "bg-white w-[300px]",
          "border-r border-zinc-50 rounded-br-xl shadow-md"
        )}
      >
        <div className="p-4 text-sm text-center text-zinc-500 mb-5 tracking-wider">
          You can{" "}
          <strong className="text-zinc-800 tracking-widest">drag</strong> these
          nodes.
        </div>
        {PALETTE_NODES_TYPES.map((type) => (
          <div
            key={type}
            className={cn(
              "flex gap-3 align-middle justify-between",
              "rounded-xl py-2 px-4",
              "text-gray-500 hover:text-gray-700 font-semibold bg-white",
              "border border-zinc-50 shadow",
              "duration-500 hover:shadow-md hover:border-zinc-400",
              "cursor-pointer"
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
};

export default Palette;
