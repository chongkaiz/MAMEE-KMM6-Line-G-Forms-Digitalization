import { Flex, Title, Divider, Grid, Text, Button } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import ShowLineChart from "./ShowLineChart";
import { IconArrowLeft } from "@tabler/icons-react";

/* function DisplayData(props: { label: string, value: any }) {
    switch (typeof props.value) {
        case "string":
            return <TextInput disabled label={props.label} defaultValue={props.value}></TextInput>
        case "number":
            return <NumberInput disabled label={props.label} defaultValue={props.value}></NumberInput>
        case "boolean":
            return <Checkbox disabled label={props.label} checked={props.value}></Checkbox>
        default:
            if (props.value instanceof Date) {
                return <DatePickerInput disabled label={props.label} defaultValue={props.value} ></DatePickerInput>
            }
    }
} */

interface CrispsControlGraphData {
    formName: string;
    header: { [key: string]: any };
    graphs: {
        title: string;
        data: any;
    }[]
};

export default function GraphDisplay() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const data: CrispsControlGraphData = state;
    const formName: string = data.formName;
    const header: { [key: string]: any } = data.header;
    const graphs: {
        title: string;
        data: any;
    }[] = data.graphs;

    return (
        <Flex h="100%" w="100%" direction="column" align="center">
            <Flex w="100%" justify="space-between" align="center">
                <Button color="#1F3E95" variant="subtle" onClick={() => navigate(-1)}><IconArrowLeft /></Button>
                <Title order={3}>{formName}</Title>
                <Flex></Flex>
            </Flex>
            <Divider my="md" w="100%" />
            <Flex w="100%" h="100%" direction="column" gap={20}>
                <Grid gutter={20} py={20} w="100%">
                    {Object.entries(header).map(([category, values]) => (
                        <Grid.Col key={category} span={4}>
                            <Flex gap={20} align="center">
                                <Title order={4}>{category}:</Title>
                                <Text>{values instanceof Date ? values.toLocaleDateString(): values}</Text> 
                            </Flex>
                        </Grid.Col>
                    ))}
                </Grid>
            </Flex>
            <Divider my="md" w="100%" />
            <Flex w="100%" h="100%" direction="column" gap={20}>
                <Title order={4} style={{ alignSelf: "flex-start" }}>Graphs</Title>
                {graphs.map((graph) => (
                    <ShowLineChart key={graph.title} {...graph}></ShowLineChart>
                ))}
            </Flex>
        </Flex>
    )
}