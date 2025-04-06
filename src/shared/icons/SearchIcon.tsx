import { DefaultIconProps } from "../model/types";

const SearchIcon = ({ color, size = 25 }: DefaultIconProps) => {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 -0.5 25 25"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.5 11.1455C5.49956 8.21437 7.56975 5.69108 10.4445 5.11883C13.3193 4.54659 16.198 6.08477 17.32 8.79267C18.4421 11.5006 17.495 14.624 15.058 16.2528C12.621 17.8815 9.37287 17.562 7.3 15.4895C6.14763 14.3376 5.50014 12.775 5.5 11.1455Z"
        style={{
          stroke: color,
          transitionDuration: "200ms",
        }}
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15.989 15.4905L19.5 19.0015"
        style={{
          stroke: color,
          transitionDuration: "200ms",
        }}
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
