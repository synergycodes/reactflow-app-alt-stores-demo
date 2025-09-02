import type { SupportedNodeTypes } from "@ts";

import IconDog from "./IconDog";
import IconCat from "./IconCat";
import IconPig from "./IconPig";
import IconWolf from "./IconWolf";

const iconByType: Record<
  SupportedNodeTypes,
  ({ className }: Props) => React.JSX.Element
> = {
  cat: IconCat,
  dog: IconDog,
  pig: IconPig,
  wolf: IconWolf,
};

const supportedTypes = Object.keys(iconByType);

type Props = {
  className?: string;
  type?: string;
};

const Icon = ({ className, type }: Props) => {
  const IconForType =
    type && supportedTypes.includes(type)
      ? iconByType[type as keyof typeof iconByType]
      : null;

  if (!IconForType) {
    return null;
  }

  return <IconForType className={className} />;
};

export default Icon;
