import { useRef } from "react";
import "@xyflow/react/dist/style.css";

import { cn } from "@/utils/cn";
import IconRerender from "@/components/icons/IconRerender";

// React strict mode runs twice in local env
const counterBump = window.location.href.includes("localhost") ? 0.5 : 1;

export const RerenderCounter = () => {
  const renderCounter = useRef(0);
  renderCounter.current = renderCounter.current + counterBump;

  return (
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
      <span className="text-sm text-zinc-500">{"<Diagram \\>"} rerenders</span>
      <span id="rerender-counter" className="font-semibold min-w-[5ch]">
        {renderCounter.current}
      </span>
    </button>
  );
};

export default RerenderCounter;
