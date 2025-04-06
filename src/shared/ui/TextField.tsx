import { SearchIcon } from "../icons";

export interface TextFieldProps {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  className?: string;
  type?: "search" | "text";
}

const TextField = ({
  value,
  label,
  onChange,
  type = "search",
  className,
}: TextFieldProps) => {
  return (
    <div className={`flex ${className}`}>
      <label className="visually-hidden">{label}</label>
      <input
        value={value}
        placeholder={label}
        onChange={(event) => onChange?.(event.target.value)}
        className={`px-[11px] py-1 h-8 w-full border border-neutral-13 hover:border-primary-3 outline-0 outline-primary-8 focus:border-primary-3 focus:outline-2 focus:outline-primary-8 duration-200 rounded-medium placeholder:text-neutral-12 ${
          type === "search" && "rounded-r-[0px]"
        }`}
        type="text"
      />
      {type === "search" && (
        <span className="bg-neutral-17 px-[11px] flex items-center justify-center h-8 border border-neutral-13 border-l-[0px] rounded-r-medium">
          <SearchIcon size={20} color="var(--color-neutral-11)" />
        </span>
      )}
    </div>
  );
};

export default TextField;
