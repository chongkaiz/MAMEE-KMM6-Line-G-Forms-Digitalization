import { Button, Stack, Title, Center, Flex } from "@mantine/core"
import { useNavigate } from "react-router-dom";

import { DailyDryMixerRecord, FryerSectionRecord, CrispsControlRecord } from "../DynamicForms/FormStructure";


export function FormsPage() {
    const navigate = useNavigate();

    return (
        <Stack>
            <Title order={3}>Key-in Forms Page</Title>
            <Flex w="100%" direction="column" align="flex-start" p={20} gap={20}>
                <Button w="200" variant="filled" color="#1F3E95" onClick={() => navigate('form-input', { state: DailyDryMixerRecord })}>Daily Dry Mixer Record</Button>
                <Button w="200" variant="filled" color="#1F3E95" onClick={() => navigate('form-input', { state: FryerSectionRecord })}>Fryer Section Record</Button>
                <Button w="200" variant="filled" color="#1F3E95" onClick={() => navigate('form-input', { state: CrispsControlRecord })}>Crisps Control Record</Button>
            </Flex>
        </Stack >
    )
}

export function ReviewPage() {

    return (
        <Stack w="100%" align="center">
            <Title order={3}>Review Forms Page</Title>
        </Stack>
    )
}

export function GraphPage() {

    return (
        <Stack w="100%" align="center">
            <Title order={3}>Graph Page</Title>
        </Stack>
    )
}

export function ReportsPage() {

    return (
        <Stack w="100%" align="center">
            <Title order={3}>Reports Page</Title>
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