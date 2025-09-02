import { cn } from "@/utils/cn";
import type { PropsWithChildren } from "react";

type Props = {
  className?: string;
  onClick: () => void;
};

const Button = ({ className, onClick, children }: PropsWithChildren<Props>) => (
  <button
    className={cn(
      "inline-flex gap-2 align-middle",
      "text-md font-semibold tracking-wider",
      "p-2 px-3 rounded-md",
      "bg-lime-600 text-lime-100",
      "duration-300 hover:bg-lime-700 active:bg-lime-800",
      className
    )}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default Button;
