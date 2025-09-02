import { cn } from "@/utils/cn";

type Props = {
  className?: string;
  children: React.ReactNode;
  isSelected?: boolean;
};

const NodePanel = ({ children, className = "", isSelected = false }: Props) => {
  return (
    <div
      className={cn(
        "min-w-[200px]",
        "rounded-xl border border-zinc-50 bg-white py-2 px-4 shadow",
        "duration-500 hover:shadow-md hover:border-zinc-400",
        "outline-dashed outline-transparent outline-2 outline-offset-12",
        className,
        {
          "outline-lime-700": isSelected,
        }
      )}
    >
      {children}
    </div>
  );
};

export default NodePanel;
