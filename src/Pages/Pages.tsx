import { Button, Stack, Title, Flex, Grid } from "@mantine/core"
import { useNavigate } from "react-router-dom";

import { DailyDryMixerRecord, FryerSectionRecord, CrispsControlRecord } from "../DynamicForms/FormStructure";
import { ApproveCrispsControlRecord } from "../MockData/MockFormApproveData";
import { CrispsControlDataGraph, CrispsControlDataReport } from "../MockData/MockData"


export function FormsPage() {
    const navigate = useNavigate();

    return (
        <Stack>
            <Title order={3}>Key-in Forms Page</Title>
            <Flex w="100%" direction="column" align="center" p={20} gap={20}>
                <Button w="200" variant="filled" color="#1F3E95" onClick={() => navigate('form-input', { state: DailyDryMixerRecord })}>Daily Dry Mixer Record</Button>
                <Button w="200" variant="filled" color="#1F3E95" onClick={() => navigate('form-input', { state: FryerSectionRecord })}>Fryer Section Record</Button>
                <Button w="200" variant="filled" color="#1F3E95" onClick={() => navigate('form-input', { state: CrispsControlRecord })}>Crisps Control Record</Button>
            </Flex>
        </Stack >
    )
}

export function ReviewPage() {
    const navigate = useNavigate();

    return (
        <Stack w="100%" align="center">
            <Title order={3}>Review Forms Page</Title>
            <Grid py={10} style={{ border: "solid grey 0.5px" }} w="100%" align="center">
                <Grid.Col span={4} >
                    <Title order={6}>Crisps Control Record</Title>
                </Grid.Col>
                <Grid.Col span={4} >
                    <Title order={6}>Time Recorded: 27/3/2024 8:20 AM</Title>
                </Grid.Col>
                <Grid.Col span={4} >
                    <Button w="200" variant="filled" color="#1F3E95" onClick={() => navigate('approve', { state: ApproveCrispsControlRecord })}>Review and Approve</Button>
                </Grid.Col>
            </Grid>
            <Grid py={10} style={{ border: "solid grey 0.5px" }} w="100%" align="center">
                <Grid.Col span={4} >
                    <Title order={6}>Crisps Control Record</Title>
                </Grid.Col>
                <Grid.Col span={4} >
                    <Title order={6}>Time Recorded: 27/3/2024 9:20 AM</Title>
                </Grid.Col>
                <Grid.Col span={4} >
                    <Button w="200" variant="filled" color="#1F3E95" onClick={() => navigate('approve', { state: ApproveCrispsControlRecord })}>Review and Approve</Button>
                </Grid.Col>
            </Grid>
        </Stack>
    )
}

export function GraphPage() {
    const navigate = useNavigate();

    return (
        <Stack w="100%" align="center">
            <Title order={3}>Graph Page</Title>
            <Flex w="100%" direction="column" align="center" p={20} gap={20}>
                <Button variant="light" color="#1F3E95" onClick={() => navigate('display', { state: CrispsControlDataGraph })}>Crisps Control Record Graph</Button>
            </Flex>
        </Stack>
    )
}

export function ReportsPage() {
    const navigate = useNavigate();

    return (
        <Stack w="100%" align="center">
            <Title order={3}>Reports Page</Title>
            <Flex w="100%" direction="column" align="center" p={20} gap={20}>
                <Button variant="light" color="#1F3E95" onClick={() => navigate('display', { state: CrispsControlDataReport })}>Crisps Control Record Report</Button>
            </Flex>
        </Stack>
    )
}

export function NewFormPage() {

    return (
        <Stack w="100%" align="center">
            <Title order={3}>Add New Form Page</Title>
        </Stack>
    )
}