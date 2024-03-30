import { Button, Flex, Grid, Text, Checkbox, Title, Divider, Center, TextInput } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
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
                    <Checkbox disabled checked={props.value} />
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

export default function FormApprove() {
    const { state } = useLocation();
    const categorizedValues: formCheckType = state;
    const navigate = useNavigate();
    console.log("inside form review")
    console.log(categorizedValues)
    return (
        <Flex h="100%" w="100%" direction="column" align="center">
            <Flex w="100%" justify="space-between" align="center">
                <Button color="#1F3E95" variant="subtle" onClick={() => navigate(-1)}><IconArrowLeft /></Button>
                <Title order={3}>{categorizedValues.formName}</Title>
                <Flex></Flex>
            </Flex>
            <Divider my="md" w="100%" />
            {Object.entries(categorizedValues.data).map(([category, values]) => (
                <Grid key={category} gutter={20} pb={50} w="100%">
                    {Object.keys(values).map((key) => (
                        <Grid.Col key={key} span={4}>
                            <DisplayData label={key} value={values[key]} />
                        </Grid.Col>
                    ))}
                </Grid>
            ))}
            <Center w="100%" bg="#DDFFDD">
                <TextInput pb={50} label="Approved by:" defaultValue="Supervisor" disabled p={10}></TextInput>
            </Center>
            <Divider w="100%" my="md" />
            <Button color="#1F3E95" w={120} variant="filled" onClick={() => navigate("/home/form-check")}>Approve</Button>
        </Flex>
    )
}