export type Option = {
  id: string;
  value: string;
};

export type SelectProps = {
  optionsList: Option[];
  selectedValue: Option | null;
  onChange: (option: Option) => void;
  onReset?: () => void;
  logoSrc?: string;
  label?: string;
  hint?: string;
  error?: Error;
  disabled?: boolean;
  placeholder?: string;
};
