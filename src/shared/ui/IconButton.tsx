import { useState } from "react";
import { DefaultIconProps } from "../model/types";

export interface IconButtonProps {
  onClick: () => void;
  icon: (props: DefaultIconProps) => React.ReactNode;
}

const IconButton = ({ onClick, icon: Icon }: IconButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const iconColor = hovered
    ? "var(--color-primary-3)"
    : "var(--color-primary-1)";

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-[32px] h-[32px] flex items-center justify-center"
      onClick={onClick}
    >
      {Icon && <Icon size={18} color={iconColor} className="cursor-pointer" />}
    </button>
  );
};

export default IconButton;
