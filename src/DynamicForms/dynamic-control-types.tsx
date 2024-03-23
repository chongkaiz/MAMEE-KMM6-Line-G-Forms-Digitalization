import { RegisterOptions } from "react-hook-form";

export type ControlType = "text" | "remarks" | "select" | "number" | "checkbox" | "date" | "time";

export interface SelectOption {
  label: string;
  value: string;
}

export interface DynamicFieldData {
  label: string;
  inputType: ControlType;
  fieldName: string;
  defaultValue: any;
  config?: RegisterOptions;
  options?: SelectOption[];
}
