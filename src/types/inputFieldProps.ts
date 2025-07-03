export interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  required?: boolean;
}