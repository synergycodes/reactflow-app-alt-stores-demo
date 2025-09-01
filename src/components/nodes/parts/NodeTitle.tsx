type Props = {
  children: React.ReactNode;
};

const NodeTitle = ({ children }: Props) => {
  return (
    <h2 className="text-sm font-semibold tracking-wider mb-2 flex gap-2 items-center">
      {children}
    </h2>
  );
};

export default NodeTitle;
