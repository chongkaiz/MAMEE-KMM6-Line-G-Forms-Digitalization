import { useRef } from "react";
import { Text, Stack, Checkbox } from '@mantine/core'
import { ErrorMessage } from "@hookform/error-message"
import { Control, FieldErrors, FieldValues, Controller } from "react-hook-form";
import { TimeInput, DatePickerInput } from "@mantine/dates"
import { IconClock } from "@tabler/icons-react";
import { TextInput, NumberInput, Grid, ActionIcon, rem } from "@mantine/core"

import { DynamicFieldData } from "./dynamic-control-types";


export default function DynamicControl(props: { control: Control<FieldValues>, data: DynamicFieldData, errors: FieldErrors<FieldValues> }) {
  const ref = useRef<HTMLInputElement>(null);

  const pickerControl = (
    <ActionIcon variant="subtle" color="gray" onClick={() => ref.current?.showPicker()}>
      <IconClock style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
    </ActionIcon>
  );

  switch (props.data.inputType) {
    case "text":
      return (
        <Grid.Col span={3}>
          <Stack gap={0}>
            <Controller
              name={props.data.fieldName}
              control={props.control}
              defaultValue={props.data.defaultValue}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  id={props.data.fieldName}
                  label={props.data.label}
                  onChange={onChange}
                  value={value}
                  disabled={props.data.config?.disabled}
                  required
                />
              )}
            />
            <ErrorMessage
              errors={props.errors}
              name={props.data.fieldName}
              render={({ message }) => <Text c="red">{message}</Text>} />
          </Stack>
        </Grid.Col>
      );
    case "remarks":
      return (
        <Grid.Col span={3}>
          <Stack gap={0}>
            <Controller
              name={props.data.fieldName}
              control={props.control}
              defaultValue={props.data.defaultValue}
              render={({ field: { onChange, value } }) => (
                <TextInput
                  id={props.data.fieldName}
                  label={props.data.label}
                  onChange={onChange}
                  value={value}
                  disabled={props.data.config?.disabled}
                />
              )}
            />
            <ErrorMessage
              errors={props.errors}
              name={props.data.fieldName}
              render={({ message }) => <Text c="red">{message}</Text>} />
          </Stack>
        </Grid.Col>
      );
    case 'checkbox':
      return (
        <Grid.Col span={3}>
          <Stack gap={0}>
            <Controller
              name={props.data.fieldName}
              control={props.control}
              defaultValue={props.data.defaultValue}
              render={({ field: { onChange, value } }) => (
                <Checkbox
                  id={props.data.fieldName}
                  label={props.data.label}
                  onChange={onChange}
                  checked={value}
                  disabled={props.data.config?.disabled}
                />
              )}
            />
            <ErrorMessage
              errors={props.errors}
              name={props.data.fieldName}
              render={({ message }) => <Text c="red">{message}</Text>} />
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
        <Grid.Col span={3}>
          <Stack gap={0}>
            <Controller
              name={props.data.fieldName}
              control={props.control}
              defaultValue={props.data.defaultValue}
              render={({ field: { onChange, value } }) => (
                <NumberInput
                  style={{ whiteSpace: "pre-wrap" }}
                  id={props.data.fieldName}
                  label={props.data.label}
                  onChange={onChange}
                  value={value}
                  disabled={props.data.config?.disabled}
                  required
                />
              )}
            />
            <ErrorMessage
              errors={props.errors}
              name={props.data.fieldName}
              render={({ message }) => <Text c="red">{message}</Text>} />
          </Stack>
        </Grid.Col>
      );
    case "date":
      return (
        <Grid.Col span={3}>
          <Stack gap={0}>
            <Controller
              name={props.data.fieldName}
              control={props.control}
              defaultValue={props.data.defaultValue}
              render={({ field: { onChange, value } }) => (
                <DatePickerInput
                  id={props.data.fieldName}
                  label={props.data.label}
                  placeholder="Select Date"
                  onChange={onChange}
                  value={value}
                  required
                />
              )}
            />
            <ErrorMessage
              errors={props.errors}
              name={props.data.fieldName}
              render={({ message }) => <Text c="red">{message}</Text>} />
          </Stack>
        </Grid.Col>
      );
    case "time":
      return (
        <Grid.Col span={3}>
          <Stack gap={0}>
            <Controller
              name={props.data.fieldName}
              control={props.control}
              defaultValue={props.data.defaultValue}
              render={({ field: { onChange, value } }) => (
                <TimeInput w="100%"
                  id={props.data.fieldName}
                  label={props.data.label}
                  onChange={onChange}
                  value={value}
                  ref={ref}
                  rightSection={pickerControl}
                  required
                />)}
            />
            <ErrorMessage
              errors={props.errors}
              name={props.data.fieldName}
              render={({ message }) => <Text c="red">{message}</Text>} />
          </Stack>
        </Grid.Col>
      )
    default:
      return <input type="text" />;
  }
};
