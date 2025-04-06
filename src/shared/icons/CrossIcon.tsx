import { DefaultIconProps } from "../model/types";

const CrossIcon = ({ color, size }: DefaultIconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        style={{
          stroke: color,
          transitionDuration: "200ms",
        }}
        stroke-linecap="round"
        stroke-width="1"
        d="M20 20L4 4m16 0L4 20"
      />
    </svg>
  );
};

export default CrossIcon;
