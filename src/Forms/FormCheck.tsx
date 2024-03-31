import { Button, Flex, Grid, Text, Title, Divider } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";

interface formCheckType {
    formName: string;
    data: {
        header: { [key: string]: any };
        check: { [key: string]: any };
        data: { [key: string]: any };
        time: { [key: string]: any };
        footer: { [key: string]: any };
    }
}

function DisplayData(props: { label: string, value: any }) {
    switch (typeof props.value) {
        case "string":
        case "number":
            return (
                <Flex gap={20} align="center">
                    <Title order={4}>{props.label}:</Title>
                    <Text>{props.value}</Text>
                </Flex>
            )
        case "boolean":
            return (
                <Flex gap={20} align="center">
                    <Title order={4}>{props.label}:</Title>
                    {props.value? <Text>{`\u2611`}</Text> : <Text>{`\u2612`}</Text>}
                </Flex>
            )
        default:
            if (props.value instanceof Date) {
                return (
                    <Flex gap={20} align="center">
                        <Title order={4}>{props.label}:</Title>
                        <Text>{props.value.toLocaleDateString()}</Text>
                    </Flex>
                )
            }
    }
}


export default function FormCheck() {
    const { state } = useLocation();
    const categorizedValues: formCheckType = state;
    const navigate = useNavigate();
    console.log("inside form review")
    console.log(categorizedValues)
    return (
        <Flex h="100%" w="100%" direction="column" align="center">
            <Title order={3}>{categorizedValues.formName}</Title>
            <Divider my="md" />
            {Object.entries(categorizedValues.data).map(([category, values]) => (
                <Grid key={category} gutter={20} pb={100} w="100%">
                    {Object.keys(values).map((key) => (
                        <Grid.Col key={key} span={4}>
                            <DisplayData label={key} value={values[key]} />
                        </Grid.Col>
                    ))}
                </Grid>
            ))}
            <Button w={120} variant="filled" onClick={() => navigate("/home")}>OK</Button>
        </Flex>
    )
}