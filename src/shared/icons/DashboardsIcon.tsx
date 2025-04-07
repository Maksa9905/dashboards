import { DefaultIconProps } from "../model/types";

const DashboardsIcon = ({ size, color }: DefaultIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 17 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_18265_7542)">
        <rect
          width="16"
          height="16"
          transform="translate(0.5)"
          fill="transparent"
          fill-opacity="0.01"
        ></rect>
        <path
          d="M14 2.5H3C2.73478 2.5 2.48043 2.60536 2.29289 2.79289C2.10536 2.98043 2 3.23478 2 3.5V12.5C2 12.7652 2.10536 13.0196 2.29289 13.2071C2.48043 13.3946 2.73478 13.5 3 13.5H14C14.2652 13.5 14.5196 13.3946 14.7071 13.2071C14.8946 13.0196 15 12.7652 15 12.5V3.5C15 3.23478 14.8946 2.98043 14.7071 2.79289C14.5196 2.60536 14.2652 2.5 14 2.5ZM14 3.5V6H3V3.5H14ZM3 7H6.5V12.5H3V7ZM14 12.5H7.5V7H14V12.5Z"
          style={{
            fill: color,
            transitionDuration: "200ms",
          }}
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_18265_7542">
          <rect
            width="16"
            height="16"
            fill="transparent"
            transform="translate(0.5)"
          ></rect>
        </clipPath>
      </defs>
    </svg>
  );
};

export default DashboardsIcon;
