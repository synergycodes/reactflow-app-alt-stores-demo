import { cn } from "@/utils/cn";
import { useMemo, type PropsWithChildren } from "react";

type Props = {
  children: React.ReactNode;
  selected: boolean;
};

const itemClassName = cn(
  "absolute top-1/2 left-1/2 -z-1",
  "-translate-x-1/2 -translate-y-1/2",
  "text-[6px] tracking-widest leading-none text-green-800",
  "text-shadow-md text-shadow-white font-semibold",
  "duration-300 ease-in-out"
);

const itemClassNameUnelected = "opacity-0 scale-0";
const itemClassNameSelected = "opacity-100 scale-200";

const items = [
  "-translate-x-[30px] -translate-y-[90px]",
  "-translate-x-[130px] -translate-y-[53px]",
  "-translate-x-[-180px] -translate-y-[13px]",
  "-translate-x-[180px] -translate-y-[33px]",
  "-translate-x-[10px] -translate-y-[-130px]",
  "-translate-x-[-120px] -translate-y-[55px]",
  "-translate-x-[50px] -translate-y-[-60px]",
  "-translate-x-[-120px] -translate-y-[-53px]",
];

const NodeExplosion = ({ children, selected }: PropsWithChildren<Props>) => {
  const { indexesToHide, smallerIndex, largerIndex } = useMemo(() => {
    return {
      indexesToHide: [
        Math.floor(Math.random() * items.length),
        Math.floor(Math.random() * items.length),
        Math.floor(Math.random() * items.length),
        Math.floor(Math.random() * items.length),
        Math.floor(Math.random() * items.length),
      ],
      smallerIndex: Math.floor(Math.random() * items.length),
      largerIndex: Math.floor(Math.random() * items.length),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  if (!children) {
    return null;
  }

  return (
    <div
      className={cn(
        "duration-500 delay-200 ease-in pointer-events-none",
        {
          "opacity-0": selected,
          "opacity-100": !selected,
        },
        "font-comic"
      )}
    >
      {items.map((item, index) => (
        <span
          key={item}
          className={cn(itemClassName, {
            [itemClassNameUnelected]: !selected,
            [itemClassNameSelected]: selected,
            [item]: selected,
            "!opacity-0": indexesToHide.includes(index),
            "text-[5px] text-gray-700": smallerIndex === index,
            "text-[11px] text-rose-500": largerIndex === index,
          })}
          style={{
            transitionDelay: `${index * 30}ms`,
          }}
        >
          {children}
        </span>
      ))}
    </div>
  );
};

export default NodeExplosion;
