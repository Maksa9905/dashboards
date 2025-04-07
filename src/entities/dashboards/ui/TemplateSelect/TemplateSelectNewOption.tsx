type TemplatesSelectNewOptionProps = { onClick: () => void };

export const TemplatesSelectNewOption = ({
  onClick,
}: TemplatesSelectNewOptionProps) => {
  return (
    <li
      onClick={onClick}
      className="h-[48px] w-[580px] flex items-center justify-center py-2 px-3 cursor-pointer hover:bg-neutral-18 duration-200"
    >
      <p className="text-primary-1">New Template</p>
    </li>
  );
};
