import { useCallback } from "react";
import { Link } from "wouter";
import type { SupportedNodeTypes } from "@ts";
import { cn } from "@/utils/cn";
import { PALETTE_NODES_TYPES } from "@/consts/init";
import IconByNodeType from "@/components/icons/IconByNodeType";
import IconVersions from "@/components/icons/IconVersions";
import { useDragAndDropContext } from "../hooks/useDragAndDropContext";


const Palette = () => {
  const { setDraggedType } = useDragAndDropContext();

  const onDragStart = useCallback(
    (event: React.DragEvent<HTMLDivElement>, nodeType: SupportedNodeTypes) => {
      setDraggedType(nodeType);
      event.dataTransfer.effectAllowed = "move";
    },
    [setDraggedType]
  );

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
        <Link
          to="/"
          className={cn(
            "mt-5",
            "inline-flex gap-1 justify-center items-center",
            "tracking-wider hover:text-lime-700 duration-100"
          )}
        >
          <IconVersions className="size-6" />
          <span className="leading-none text-sm">Change version</span>
        </Link>
      </div>
    </aside>
  );
};

export default Palette;
