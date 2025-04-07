export interface DefaultIconProps {
  color: string;
  size?: number;
  className?: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface CustomSelectOption {
  label: string;
  value: string;
  content: React.ReactNode;
}
