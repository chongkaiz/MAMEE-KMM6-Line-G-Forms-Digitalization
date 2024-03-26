import { Flex, Grid, Button, Center, Divider, Title, Group } from "@mantine/core"
import { FormProvider, useForm } from "react-hook-form";
import { DynamicFieldData, formStructure } from "../DynamicForms/dynamic-control-types.tsx";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod'
import { IconArrowLeft } from '@tabler/icons-react'
import DynamicControl from "../DynamicForms/DynamicControl.tsx";
import { useLocation, useNavigate } from "react-router-dom";
import { KeyboardEvent } from "react";

interface FormProps {
    fields: formStructure;
}

const generateSchema = (formStructure: formStructure["fields"]) => {
    let schema: Record<string, any> = {};
    Object.keys(formStructure).map((key) => {
        let fields: DynamicFieldData[] | undefined = formStructure[key as keyof formStructure["fields"]];
        fields?.forEach((field: DynamicFieldData) => {
            switch (field.inputType) {
                case 'date':
                    schema[field.fieldName] = z.date({
                        required_error: "Please select a date",
                        invalid_type_error: "Invalid date",
                    });
                    break;
                case 'time':
                    schema[field.fieldName] = z.string({
                        required_error: "Please select a time",
                        invalid_type_error: "Invalid time",
                    }).min(1, { message: "Please select a time" });
                    break;
                case 'text':
                    schema[field.fieldName] = z.string({
                        required_error: "Please key in field",
                        invalid_type_error: "Invalid text",
                    }).min(1, { message: "Please key in field" });
                    break;
                case 'number':
                    schema[field.fieldName] = z.number({
                        required_error: "Please key in a value",
                        invalid_type_error: "Invalid value",
                    });
                    break;
                case 'checkbox':
                    schema[field.fieldName] = z.boolean({
                        required_error: "isActive is required",
                        invalid_type_error: "isActive must be a boolean",
                    });
                    break;
                case 'remarks':
                    schema[field.fieldName] = z.string({
                        required_error: "Please key in field",
                        invalid_type_error: "Invalid text",
                    });
                    break;
            }
        });
    });
    return z.object(schema);
};

function mapValues(keyArray: string[], valueArray: any[]) {
    return keyArray.reduce((obj: Record<string, any>, key: string, index) => {
        obj[key] = valueArray[index];
        return obj;
    }, {});
}

export default function TestForms() {
    const navigate = useNavigate();
    const { state } = useLocation();

    const formData: FormProps["fields"] = state;
    const testFormSchema = generateSchema(formData.fields);
    const formMethods = useForm({
        resolver: zodResolver(testFormSchema),
    });
    const {
        handleSubmit,
        control,
        watch,
        formState: { errors, isSubmitting },
    } = formMethods;

    const headerFields = formData.fields.headerFields;
    const timeFields = formData.fields.timeFields;
    const dataFields = formData.fields.dataFields;
    const checkFields = formData.fields.checkFields;
    const footerFields = formData.fields.footerFields;

    const labelHeaderFields = headerFields.map(field => field.label);
    const labelTimeFields = timeFields.map(field => field.label);
    const labelDataFields = dataFields.map(field => field.label);
    const labelCheckFields = checkFields ? checkFields.map(field => field.label) : [];
    const labelFooterFields = footerFields.map(field => field.label);

    const watchHeaderFields = watch(headerFields.map(field => field.fieldName));
    const watchTimeFields = watch(timeFields.map(field => field.fieldName));
    const watchDataFields = watch(dataFields.map(field => field.fieldName));
    const watchCheckFields = checkFields ? watch(checkFields.map(field => field.fieldName)) : [];
    const watchFooterFields = watch(footerFields.map(field => field.fieldName));


    function onSubmit(data: any) {
        // console.log('watchHeaderFields');
        // console.log(watchHeaderFields);
        // console.log('watchTimeFields');
        // console.log(watchTimeFields);
        // console.log('watchDataFields');
        // console.log(watchDataFields);
        // console.log('watchCheckFields');
        // console.log(watchCheckFields);
        // console.log('watchFooterFields');
        // console.log(watchFooterFields);

        let headerSection = mapValues(labelHeaderFields, watchHeaderFields);
        let timeSection = mapValues(labelTimeFields, watchTimeFields);
        let dataSection = mapValues(labelDataFields, watchDataFields);
        let checkSection = mapValues(labelCheckFields, watchCheckFields);
        let footerSection = mapValues(labelFooterFields, watchFooterFields);


        let categorizedValues = {
            header: headerSection,
            time: timeSection,
            data: dataSection,
            check: checkSection,
            footer: footerSection
        }

        console.log('categorizedValues');
        console.log(categorizedValues);
        navigate("check", { state: { categorizedValues: categorizedValues, formName: formData.formName} });
    }


    const checkKeyDown = (e: KeyboardEvent<HTMLFormElement>) => {
        if (e.key === 'Enter') e.preventDefault();
    };

    return (
        <Flex h="100%" direction="column" justify="space-between">
            <Group justify="space-between">
                <Button color="#1F3E95" variant="subtle" onClick={() => navigate(-1)}><IconArrowLeft /></Button>
                <Title order={3}>{formData.formName}</Title>
                <Flex></Flex>
            </Group>
            <Divider my="md" />
            <form onSubmit={handleSubmit(onSubmit)} onKeyDown={(e) => checkKeyDown(e)}>
                <FormProvider {...formMethods}>
                    <Grid gutter={30} align="flex-end">
                        <Grid.Col>
                            <Flex justify='flex-start'>
                                <Title order={4}>Info</Title>
                            </Flex>
                        </Grid.Col>
                        {headerFields.map((data, i) => (
                            <DynamicControl key={i} control={control} data={data} errors={errors} />
                        ))}
                    </Grid>
                    <Grid gutter={30} align="flex-end">
                        <Grid.Col span={12}>
                            <Divider my="md" />
                            <Flex justify='flex-start'>
                                <Title order={4}>Data</Title>
                            </Flex>
                        </Grid.Col>
                        {timeFields.map((data, i) => (
                            <DynamicControl key={i} control={control} data={data} errors={errors} />
                        ))}
                    </Grid>
                    <Grid pt={50} align="flex-end">
                        {dataFields.map((data, i) => (
                            <DynamicControl key={i} control={control} data={data} errors={errors} />
                        ))}
                    </Grid>
                    {checkFields && <Grid gutter={30} pt={50} align="flex-end">
                        {checkFields.map((data, i) => (
                            <DynamicControl key={i} control={control} data={data} errors={errors} />
                        ))}
                    </Grid>}
                    <Grid gutter={30} columns={6} align="flex-end">
                        <Grid.Col span={6}>
                            <Divider my="md" />
                            <Flex justify='flex-start'>
                                <Title order={4}>Recorded by</Title>
                            </Flex>
                        </Grid.Col>
                        {footerFields.map((data, i) => (
                            <DynamicControl key={i} control={control} data={data} errors={errors} />
                        ))}
                    </Grid>
                </FormProvider>
                <Center>
                    <Button color="#1F3E95" mt={60} type="submit" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting" : "Submit"}
                    </Button>
                </Center>
            </form>
        </Flex >
    );
}