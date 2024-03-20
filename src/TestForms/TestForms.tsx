import { Flex, Grid, Button, Center } from "@mantine/core"
import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData } from "../DynamicForms/dynamic-control-types.tsx";

import DynamicControl from "../DynamicForms/DynamicControl.tsx";

interface FormProps {
    fields: DynamicFieldData[];
}

export default function TestForms( {fields} : FormProps) {
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
        <Flex>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...formMethods}>
                    <Grid gutter={30}>
                        {fields.map((data, i) => (
                            <DynamicControl key={i} control={control} data={data} errors={errors} />
                        ))}
                    </Grid>
                </FormProvider>
                <Center>
                    <Button mt={60} type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting" : "Submit"}
                    </Button>
                </Center>
            </form>
        </Flex>
    );
}