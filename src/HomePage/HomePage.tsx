import { useState } from 'react'

import { IconFileSpreadsheet, IconChecklist, IconChartHistogram, IconReport, IconTablePlus, IconLogout } from '@tabler/icons-react';
import { AppShell, NavLink, Flex, Group, Burger, Title, Stack, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { useNavigate, Outlet } from 'react-router-dom'


const navLinkData = [
    {
        icon: IconFileSpreadsheet, label: 'Key-in Forms', description: 'Input to digital forms', link: ''
    },
    {
        icon: IconChecklist, label: 'Approve Forms', description: 'Check and approve digital forms', link: 'form-check'
    },
    {
        icon: IconChartHistogram, label: 'Charts & Graphs', description: 'View charts', link: 'graphs'
    },
    {
        icon: IconReport, label: 'Reports', description: 'View graphs', link: 'reports'
    },
    {
        icon: IconTablePlus, label: 'Add New Forms', description: 'Add new type of forms', link: 'new-form'
    },
];

export default function HomePage() {
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);
    const [active, setActive] = useState(0);
    let date = new Date().toDateString()
    let time = new Date().toLocaleTimeString()
    const navigate = useNavigate();

    const [dateNow, setDateNow] = useState(date)
    const [timeNow, setTimeNow] = useState(time)


    const UpdateTime = () => {
        time = new Date().toLocaleTimeString()
        date = new Date().toLocaleDateString()
        setTimeNow(time)
        setDateNow(date)
    }
    setInterval(UpdateTime)

    return (

        <AppShell
            header={{ height: 80 }}
            navbar={{ width: 200, breakpoint: 'sm', collapsed: { mobile: !desktopOpened, desktop: !desktopOpened } }}
            padding="md"
        >
            <AppShell.Header bg='#FFE900'>
                <Flex h="100%" w="100%" px="md" justify="space-between" align="center">
                    <Group>
                        <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                        <img style={{ maxWidth: 100 }} alt='mamee-logo' src="\src\assets\Mamee.png" />
                        <Title order={3} c='#1F3E95'>Digital Production Forms</Title>
                    </Group>
                    <Stack gap={0}>
                        <Title order={6} c='#1F3E95'>{dateNow}</Title>
                        <Title order={6} c='#1F3E95'>{timeNow}</Title>
                    </Stack>
                </Flex>
            </AppShell.Header>
            <AppShell.Navbar p="md">
                <Stack gap={0} justify='space-between' h='100%'>
                    <Stack>
                        <Title pb={20} c="#1F3E95" order={4}>Menu</Title>
                        {navLinkData.map((item, index) => (
                            <NavLink
                                key={item.label}
                                active={index === active}
                                label={item.label}
                                //description={item.description}
                                leftSection={<item.icon size="1rem" stroke={1.5} />}
                                onClick={() => {
                                    toggleDesktop()
                                    navigate(item.link)
                                    setActive(index)
                                }}
                                color="#1F3E95"
                            />
                        ))}
                    </Stack>
                    <Stack>
                        <Button leftSection={<IconLogout />}>Logout</Button>
                    </Stack>
                </Stack>
            </AppShell.Navbar>
            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    )
}