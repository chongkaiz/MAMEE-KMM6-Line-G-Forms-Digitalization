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

export interface formStructure {
  formName: string;
  fields: {
    headerFields: DynamicFieldData[];
    timeFields: DynamicFieldData[];
    dataFields: DynamicFieldData[];
    checkFields?: DynamicFieldData[];
    footerFields: DynamicFieldData[];
  }
}