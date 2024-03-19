import { useState } from 'react'

import { AppShell, Group, Burger, Skeleton, Stack, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom'

import './HomePage.css'


export default function HomePage() {
    const [opened, { toggle }] = useDisclosure();
    const navigate = useNavigate();
    let time = new Date().toLocaleString()

    const [timeNow, setTimeNow] = useState(time)

    const UpdateTime = () => {
        time = new Date().toLocaleString()
        setTimeNow(time)
    }
    setInterval(UpdateTime)

    return (

        <AppShell
            header={{ height: 80 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { desktop: !opened, mobile: !opened } }}
            padding="md"
        >
            <AppShell.Header bg='#FFE900'>
                <Group h="100%" px="md" justify='space-between'>
                    <Group>
                        <Burger opened={opened} onClick={toggle} size="md" />
                        <img style={{ maxWidth: 120 }} alt='mamee-logo' src="src\assets\Mamee.png" />
                        <div className='title'>Digital Production Forms</div>
                    </Group>
                    <div className='current-date-time'>{timeNow}</div>
                </Group>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                Menu
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false} />
                    ))}
            </AppShell.Navbar>
            <AppShell.Main>
                <Stack
                    w='100%'
                    justify='center'
                    align='center'>
                    <Button variant='filled' w='200px' onClick={() => navigate('/form-1')} >Daily Dry Mixer record</Button>
                </Stack>
            </AppShell.Main>
        </AppShell>
    )
}