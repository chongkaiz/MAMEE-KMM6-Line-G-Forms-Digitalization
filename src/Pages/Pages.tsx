import { Button, Grid, Stack, Title, Center } from "@mantine/core"
import { useNavigate } from "react-router-dom";

import { fields } from "../DynamicForms/data";


export function WelcomePage() {
    return (
        <Center>
            <Title order={3}>Welcome KMM6</Title>
        </Center>
    )
}

export function FormsPage() {
    const navigate = useNavigate();

    return (
        <Grid w="100%" align="center" gutter={20}>
            <Grid.Col span={12} bg="white">
                <Title order={3}>Key-in Forms Page</Title>
            </Grid.Col>
            <Grid.Col span={4} bg="white">
                <Button w="100%" h="60" variant="filled" onClick={() => navigate('form-input', { state: fields })}>Daily Dry Mixer Record</Button>
            </Grid.Col>
            <Grid.Col span={4} bg="white">
                <Button w="100%" h="60" variant="filled" onClick={() => navigate('form-input', { state: fields })}>Crisps Control Record</Button>
            </Grid.Col>
            <Grid.Col span={4} bg="white">
                <Button w="100%" h="60" variant="filled" onClick={() => navigate('form-input', { state: fields })}>Fryer Section Record</Button>
            </Grid.Col>
            <Grid.Col span={4} bg="white">
                <Button w="100%" h="60" variant="filled" onClick={() => navigate('form-input', { state: fields })}>Daily Pre-Operational Cleaning Checklist (Crushed MPC)</Button>
            </Grid.Col>
        </Grid>
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