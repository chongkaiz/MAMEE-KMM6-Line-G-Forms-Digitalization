import { useRef } from "react";
import { Center } from '@mantine/core'
import { Control, FieldValues, Controller } from "react-hook-form";
import { TimeInput, DatePickerInput } from "@mantine/dates"
import { IconClock } from "@tabler/icons-react";
import { TextInput, Textarea, NumberInput, Grid, ActionIcon, rem } from "@mantine/core"

import { DynamicFieldData } from "./dynamic-control-types";


export default function DynamicControl(props: { control: Control<FieldValues>, data: DynamicFieldData }) {
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
        </Grid.Col>
      );
    case "remarks":
      return (<Grid.Col span={3}>
        <Controller
          name={props.data.fieldName}
          control={props.control}
          defaultValue={props.data.defaultValue}
          render={({ field: { onChange, value } }) => (
            <Textarea
              id={props.data.fieldName}
              label={props.data.label}
              onChange={onChange}
              value={value}
              rows={3}
            />
          )}
        />
      </Grid.Col>);
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
          <Controller
            name={props.data.fieldName}
            control={props.control}
            defaultValue={props.data.defaultValue}
            render={({ field: { onChange, value } }) => (
              <NumberInput
                id={props.data.fieldName}
                label={props.data.label}
                onChange={onChange}
                value={value}
                disabled={props.data.config?.disabled}
              />
            )}
          />
        </Grid.Col>
      );
    case "date":
      return (
        <Grid.Col span={3}>
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
              />
            )}
          />
        </Grid.Col>
      );
    case "time":
      return (
        <Grid.Col span={6}>
          <Center>
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
                />)}
            />
            {/* <TimeInput w="100%"
              name={props.data.fieldName}
              control={props.control}
              label={props.data.label}
              defaultValue={props.data.defaultValue}
            /> */}
          </Center>
        </Grid.Col>
      )
    default:
      return <input type="text" />;
  }
};
