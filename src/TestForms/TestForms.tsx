import { Flex, Grid, Button, Center, Divider, Title } from "@mantine/core"
import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData } from "../DynamicForms/dynamic-control-types.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'

import DynamicControl from "../DynamicForms/DynamicControl.tsx";
import { useLocation } from "react-router-dom";

interface FormProps {
    fields: DynamicFieldData[];
}

const headerFields: DynamicFieldData[] = [
    {
        fieldName: "date",
        inputType: "date",
        label: "Date",
        defaultValue: new Date()
    },
    {
        fieldName: "buyer",
        inputType: "text",
        label: "Buyer",
        defaultValue: ""
    },
    {
        fieldName: "line",
        inputType: "number",
        label: "Line",
        defaultValue: 1
    },
    {
        fieldName: "Product",
        inputType: "text",
        label: "Product",
        defaultValue: ""
    }
]

const footerFields: DynamicFieldData[] = [
    {
        fieldName: "recorded",
        inputType: "text",
        label: "Recorded by Operator",
        defaultValue: ""
    },
    {
        fieldName: "remarks",
        inputType: "remarks",
        label: "Remarks",
        defaultValue: ""
    }
]

const generateSchema = (fields: DynamicFieldData[]) => {
    let schema: Record<string, any> = {};
    fields.forEach(field => {
        switch (field.inputType) {
            case 'time':
                schema[field.fieldName] = z.date({
                    required_error: "Please select a date and time",
                    invalid_type_error: "That's not a date!",
                });
                break;
            case 'text':
                schema[field.fieldName] = z.string();
                break;
            case 'number':
                schema[field.fieldName] = z.number();
                break;
            default:
                throw new Error(`Unsupported input type: ${field.inputType}`);
        }
    });
    return z.object(schema);
};

export default function TestForms() {
    const { state } = useLocation();
    const fields: FormProps["fields"] = state;

    const testFormSchema = generateSchema(fields);


    const formMethods = useForm({
        //resolver: zodResolver(testFormSchema),
    });
    const {
        handleSubmit,
        control,
        formState: { isSubmitting },
    } = formMethods;

    function onSubmit(data: any) {
        console.log(data);
    }

    return (
        <Flex h="100%" direction="column" justify="space-between">
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormProvider {...formMethods}>
                    <Grid gutter={30}>
                        <Grid.Col>
                            <Flex justify='flex-start'>
                                <Title order={4}>Info</Title>
                            </Flex>
                        </Grid.Col>
                        {headerFields.map((data, i) => (
                            <DynamicControl key={i} control={control} data={data} />
                        ))}
                    </Grid>
                    <Grid gutter={30}>
                        <Grid.Col>
                            <Divider my="md" />
                            <Flex justify='flex-start'>
                                <Title order={4}>Data</Title>
                            </Flex>
                        </Grid.Col>
                        {fields.map((data, i) => (
                            <DynamicControl key={i} control={control} data={data} />
                        ))}
                        <Grid.Col>
                            <Divider my="md" />
                            <Flex justify='flex-start'>
                                <Title order={4}>Recorded by</Title>
                            </Flex>
                        </Grid.Col>
                    </Grid>
                    <Grid gutter={30} columns={6}>
                        {footerFields.map((data, i) => (
                            <DynamicControl key={i} control={control} data={data} />
                        ))}
                    </Grid>
                </FormProvider>
                <Center>
                    <Button mt={60} type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting" : "Submit"}
                    </Button>
                </Center>
            </form>
        </Flex >
    );
}