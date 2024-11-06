import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { FocusEvent } from "react";
export type TFormInput<TFieldValue extends FieldValues> = {
  fieldTitle: string;
  type?: string;
  placeholder?: string;
  nameInSchema: Path<TFieldValue>;
  register: UseFormRegister<TFieldValue>;
  error: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  formText?: string;
  success?: string;
  disabled?: boolean;
  serverError: string;
  description?: string;
  defaultValue?: string | number;
};
