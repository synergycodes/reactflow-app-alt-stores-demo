import { cn } from "@/utils/cn";
import ConnectButton from "../contexts/connectionMaker/components/ConnectButton";

const NodeTools = () => {
  return (
    <div className="fixed right-1/2 translate-x-1/2 bottom-5 z-10">
      <div
        className={cn(
          "flex flex-col gap-3",
          "bg-white rounded-xl",
          "border-r border-zinc-50 p-4 shadow-md"
        )}
      >
        <ConnectButton />
      </div>
    </div>
  );
};

export default NodeTools;
