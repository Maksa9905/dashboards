import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { SelectOption } from "../model/types";
import Button from "./Button";
import { ArrowDownIcon, CrossIcon } from "../icons";

export interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onChangeOptions?: (options: SelectOption[]) => void;
  customOptions?: boolean;
  options: SelectOption[];
}

const Select = ({
  options,
  value,
  onChange,
  customOptions,
  onChangeOptions,
  label,
}: SelectProps) => {
  const [expanded, setExpanded] = useState(false);

  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const displayLabel = useMemo(
    () => options.find((option) => option.value === value)?.label,
    [options, value]
  );

  const handleRemoveOption = useCallback(() => {
    onChangeOptions?.(options.filter((option) => option.value !== value));
  }, [options]);

  const handleAddOption = useCallback(() => {}, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (buttonRef.current?.contains(event.target as Node)) return;
      if (dropdownRef.current === event.target) return;

      setExpanded(false);
    };

    addEventListener("click", handleClickOutside);

    return () => removeEventListener("click", handleClickOutside);
  }, [dropdownRef, buttonRef]);

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
          {options.map((option) => (
            <li
              key={option.value}
              className="w-full hover:bg-neutral-17 p-1 flex justify-between items-center cursor-pointer"
              onClick={() => onChange(option.value)}
            >
              {option.label}
              {customOptions && (
                <CrossIcon
                  onClick={() => handleRemoveOption()}
                  size={16}
                  color="var(--color-neutral-14)"
                />
              )}
            </li>
          ))}
          {customOptions && (
            <li
              key="value"
              className="w-full hover:bg-neutral-17 p-1 cursor-pointer text-center text-primary-2"
            >
              New Option
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Select;
