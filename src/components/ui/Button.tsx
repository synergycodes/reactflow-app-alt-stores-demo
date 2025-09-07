import { cn } from "@/utils/cn";
import type { PropsWithChildren } from "react";

type Props = {
  className?: string;
  variant?: "default" | "destructive";
  onClick: () => void;
};

const Button = ({
  className,
  variant = "default",
  onClick,
  children,
}: PropsWithChildren<Props>) => (
  <button
    className={cn(
      "inline-flex gap-2 align-middle",
      "text-md font-semibold tracking-wider",
      "p-2 px-3 rounded-md duration-300",
      className,
      {
        "bg-lime-600 text-lime-200 hover:bg-lime-700 active:bg-lime-800":
          variant === "default",
        "bg-amber-600 text-amber-200 hover:bg-amber-700 active:bg-amber-800":
          variant === "destructive",
      }
    )}
    onClick={onClick}
    type="button"
  >
    {children}
  </button>
);

export default Button;
