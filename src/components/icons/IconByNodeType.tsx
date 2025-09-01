import type { SupportedNodeTypes } from "@ts";

import IconBulb from "./IconBulb";

const iconByType: Record<
  SupportedNodeTypes,
  ({ className }: Props) => React.JSX.Element
> = {
  example: IconBulb,
};

const supportedTypes = Object.keys(iconByType);

type Props = {
  className?: string;
  type: SupportedNodeTypes;
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
