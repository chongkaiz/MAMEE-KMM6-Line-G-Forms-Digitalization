import { Stack, Grid } from "@mantine/core"
import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData } from "../DynamicForms/dynamic-control-types.tsx";
import { ErrorMessage } from "@hookform/error-message";

import DynamicControl from "../DynamicForms/DynamicControl.tsx";

interface FormProps {
    fields: DynamicFieldData[];
}

export default function TestForms({ fields }: FormProps) {
    const formMethods = useForm();
    const {
        handleSubmit,
        control,
        formState: { isSubmitting, errors }
    } = formMethods;

    function onSubmit(data: any, error: any) {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormProvider {...formMethods}>
                <Grid gutter={30}>
                    {fields.map((data, i) => (
                        <Grid.Col key={i} span={4}>
                            <Stack gap={8}>
                                <DynamicControl control={control} data={data} />
                                <ErrorMessage errors={errors} name={data.fieldName} />
                            </Stack>
                        </Grid.Col>
                    ))}
                </Grid>
            </FormProvider>

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting" : "Submit"}
            </button>
        </form>
    );
}