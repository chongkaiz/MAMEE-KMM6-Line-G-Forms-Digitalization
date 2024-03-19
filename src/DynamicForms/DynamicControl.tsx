import { TimeInput, TextInput, NumberInput } from "react-hook-form-mantine"
import { Control, FieldValues, FieldErrors } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { Stack, Grid } from "@mantine/core"

import { DynamicFieldData } from "./dynamic-control-types";

export default function DynamicControl(props: { errors: FieldErrors<FieldValues>, control: Control<FieldValues>, data: DynamicFieldData }) {

  switch (props.data.inputType) {
    case "text":
      return (
        <Grid.Col span={4}>
          <Stack gap={8}>
            <TextInput
              name={props.data.fieldName}
              id={props.data.fieldName}
              control={props.control}
              label={props.data.label}
              defaultValue={props.data.defaultValue}
            />
            <ErrorMessage errors={props.errors} name={props.data.fieldName} />
          </Stack>
        </Grid.Col>
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
        <Grid.Col span={4}>
          <Stack gap={8}>
            <NumberInput
              name={props.data.fieldName}
              id={props.data.fieldName}
              control={props.control}
              label={props.data.label}
              defaultValue={props.data.defaultValue}
            />
            <ErrorMessage errors={props.errors} name={props.data.fieldName} />
          </Stack>
        </Grid.Col>
      );
    case "time":
      return (
        <Grid.Col span={6}>
          <Stack gap={8}>
            <TimeInput
              name={props.data.fieldName}
              id={props.data.fieldName}
              control={props.control}
              label={props.data.label}
              defaultValue={props.data.defaultValue}
            />
            <ErrorMessage errors={props.errors} name={props.data.fieldName} />
          </Stack>
        </Grid.Col>
      )
    default:
      return <input type="text" />;
  }
};
