import { Button, Flex, Grid, TextInput, NumberInput, Checkbox, Title, Divider } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useLocation, useNavigate } from "react-router-dom";

function DisplayData(props: { label: string, value: any }) {
    switch (typeof props.value) {
        case "string":
            return <TextInput disabled label={props.label} defaultValue={props.value}></TextInput>
        case "number":
            return <NumberInput disabled label={props.label} defaultValue={props.value}></NumberInput>
        case "boolean":
            return <Checkbox disabled label={props.label} checked={props.value}></Checkbox>
        default:
            if (props.value instanceof Date) {
                return <DatePickerInput disabled label={props.label} defaultValue={props.value}></DatePickerInput>
            }
    }
}


export default function FormCheck() {
    const { state } = useLocation();
    const categorizedValues: {
        header: { [key: string]: any };
        check: { [key: string]: any };
        data: { [key: string]: any };
        time: { [key: string]: any };
        footer: { [key: string]: any };
    } = state.categorizedValues;
    const formName: string = state.formName;
    const navigate = useNavigate();
    console.log("inside form review")
    console.log(categorizedValues)
    return (
        <Flex h="100%" w="100%" direction="column" align="center">
            <Title order={3}>{formName}</Title>
            <Divider my="md" />
            {Object.entries(categorizedValues).map(([category, values]) => (
                <Grid key={category} gutter={20} pb={100} w="100%">
                    {Object.keys(values).map((key) => (
                        <Grid.Col key={key} span={4}>
                            <DisplayData label={key} value={values[key]} />
                        </Grid.Col>
                    ))}
                </Grid>
            ))}
            <Button color="#1F3E95" w={120} variant="filled" onClick={() => navigate("/home")}>OK</Button>
        </Flex>
    )
}