import { useEffect, useMemo, useRef, useState } from "react";
import { CustomSelectOption, SelectOption } from "../model/types";
import Button from "./Button";
import { ArrowDownIcon } from "../icons";

export interface SelectProps<CustomOptions extends boolean> {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  customOptions?: CustomOptions;
  options: CustomOptions extends true ? CustomSelectOption[] : SelectOption[];
}

const Select = <CustomOptions extends boolean>({
  options,
  value,
  onChange,
  customOptions,
  label,
}: SelectProps<CustomOptions>) => {
  const [expanded, setExpanded] = useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current?.contains(event.target as Node)) return;
      if (dropdownRef.current === event.target) return;

      setExpanded(false);
    };

    addEventListener("click", handleClickOutside);

    return () => removeEventListener("click", handleClickOutside);
  }, [dropdownRef, buttonRef]);

  const displayLabel = useMemo(
    () => options.find((option) => option.value === value)?.label,
    [options, value]
  );

  return (
    <div>
      <Button
        ref={buttonRef}
        size="medium"
        endIcon={ArrowDownIcon}
        onClick={() => setExpanded((prevExpanded) => !prevExpanded)}
      >
        {displayLabel || <label className="text-neutral-10">{label}</label>}
      </Button>
      {expanded && (
        <ul
          ref={dropdownRef}
          style={{
            top: (buttonRef.current?.offsetTop || 0) + 40,
          }}
          className="absolute bg-white z-2 p-2 shadow-neutral-12 shadow-sm rounded-medium min-w-[200px] max-h-[160px] overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-neutral-14 scrollbar-hover:scrollbar-thumb-neutral-10"
        >
          {!customOptions &&
            options.map((option) => (
              <li
                key={option.value}
                className="w-full hover:bg-neutral-17 p-1 cursor-pointer"
                onClick={() => onChange?.(option.value)}
              >
                {option.label}
              </li>
            ))}
          {customOptions &&
            options.map((option) => (option as CustomSelectOption).content)}
        </ul>
      )}
    </div>
  );
};

export default Select;
