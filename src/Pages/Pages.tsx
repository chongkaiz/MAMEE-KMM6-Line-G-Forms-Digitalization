import { Button, Stack, Title, Center, Modal } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";

import TestForms from "../TestForms/TestForms";
import { fields } from "../DynamicForms/data";


export function WelcomePage() {
    return (
        <Center>
            <Title order={3}>Welcome KMM6</Title>
        </Center>
    )
}

export function FormsPage() {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <Stack w="100%" align="center">
            <Modal opened={opened} onClose={close}
                title={<div><Title order={2}>Form 1</Title></div>}
                fullScreen={true}
                radius={0}
                transitionProps={{ transition: 'slide-left', duration: 200 }}>
                <TestForms fields={fields} />
            </Modal>
            <Title order={3}>Digital Forms Page</Title>
            <Button variant="filled" w={120} onClick={open}>Open Form 1</Button>
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