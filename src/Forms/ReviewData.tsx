import { Flex, Grid, Text, Title } from "@mantine/core";


export interface formReviewType {
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
                <Flex gap={20} align="center" justify="space-between">
                    <Title order={4}>{props.label}:</Title>
                    <Text px={5} bg="#DDDDDD">{props.value}</Text>
                </Flex>
            )
        case "boolean":
            return (
                <Flex gap={20} align="center" justify="space-between">
                    <Title order={4}>{props.label}:</Title>
                    {props.value ? <Text px={5}>{`\u2611`}</Text> : <Text px={5}>{`\u2610`}</Text>}
                </Flex>
            )
        default:
            if (props.value instanceof Date) {
                return (
                    <Flex gap={20} align="center" justify="space-between">
                        <Title order={4}>{props.label}:</Title>
                        <Text px={5} bg="#DDDDDD">{props.value.toLocaleDateString()}</Text>
                    </Flex>
                )
            }
    }
}

export default function ReviewData(props: formReviewType) {
    return (
        Object.entries(props.data).map(([category, values]) => (
            Object.keys(values).length? <Grid key={category} gutter={20} mb={50} w="100%">
                {Object.keys(values).map((key) => (
                    <Grid.Col key={key} span={4} style={{ alignContent: "center" }}>
                        <DisplayData label={key} value={values[key]} />
                    </Grid.Col>
                ))}
            </Grid> : <></>
        ))
    )
}