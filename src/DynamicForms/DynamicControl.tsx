import { TimeInput, TextInput, NumberInput } from "react-hook-form-mantine"
import { Control, FieldValues } from "react-hook-form";
import { DynamicFieldData } from "./dynamic-control-types";

export default function DynamicControl(props: { control: Control<FieldValues>, data: DynamicFieldData }) {

  switch (props.data.inputType) {
    case "text":
      return (
        <TextInput
          name={props.data.fieldName}
          id={props.data.fieldName}
          control={props.control}
          label={props.data.label}
          defaultValue={props.data.defaultValue}
        />
      );
    /* case "select": {
      return (
        <select
          {...register(fieldName, config)}
          defaultValue={defaultValue}
          name={fieldName}
          id={fieldName}
        >
          {options.map((o, index) => (
            <option key={index} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    }
    */
    case "number":
      return (
        <NumberInput
          name={props.data.fieldName}
          id={props.data.fieldName}
          control={props.control}
          label={props.data.label}
          defaultValue={props.data.defaultValue}
        />
      );
    case "time":
      return (
        <TimeInput
          name={props.data.fieldName}
          id={props.data.fieldName}
          control={props.control}
          label={props.data.label}
          defaultValue={props.data.defaultValue}
        />
      )
    default:
      return <input type="text" />;
  }
};
