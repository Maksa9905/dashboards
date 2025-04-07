import React, { ReactNode, useState } from "react";
import { DefaultIconProps } from "../model/types";

export interface ButtonProps {
  children: React.ReactNode;
  size?: "small" | "medium";
  variant?: "outlined" | "contained";
  endIcon?: (props: DefaultIconProps) => ReactNode;
  startIcon?: (props: DefaultIconProps) => ReactNode;
  onClick?: () => void;
  ref?: React.Ref<HTMLButtonElement>;
  fullWidth?: boolean;
}

const Button = ({
  onClick,
  variant = "outlined",
  children,
  endIcon: EndIcon,
  startIcon: StartIcon,
  size = "small",
  ref,
  fullWidth,
}: ButtonProps) => {
  const [hovered, setHovered] = useState(false);

  const className = `${
    size === "small" ? "px-[7px] rounded-[4px]" : "px-[11px] rounded-medium h-8"
  } ${
    variant === "outlined"
      ? "border bg-white border-neutral-13 hover:border-primary-3 hover:text-primary-3 active:border-primary-1-dark active:text-primary-1-dark"
      : "bg-primary-1 text-white hover:bg-primary-4 active:bg-primary-1-dark"
  } duration-200 text-medium flex items-center gap-2 ${
    fullWidth ? "w-full" : ""
  }`;

  const iconColor =
    variant === "contained"
      ? "var(--color-white)"
      : hovered
      ? "var(--color-primary-3)"
      : "var(--color-neutral-1)";

  return (
    <button
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      className={className}
      ref={ref}
    >
      {StartIcon && <StartIcon size={14} color={iconColor} />}
      {children}
      {EndIcon && <EndIcon size={14} color={iconColor} />}
    </button>
  );
};

export default Button;
