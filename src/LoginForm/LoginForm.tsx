import { useState } from "react";
import { Flex, Center, TextInput, PasswordInput, Button, Title, Stack, Divider } from "@mantine/core"
import { useNavigate } from "react-router-dom"


export default function LoginForm() {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    return (
        <Center w="100vw" h="100vh" bg="#F8D30E">
            <Flex h="80vh" direction="column" justify="space-between" align="center">
                <img style={{ height: 120 }} alt='mamee-logo' src="\src\assets\Mamee.png" />
                <Flex h={400} direction="column" justify="space-between" p={30} bg="white"
                    style={{ border: "1px black solid", borderRadius: "30px", boxShadow: "5px 5px #AAAAAA" }}>
                    <Stack gap={0}>
                        <Title order={2}>Login</Title>
                        <Divider mb={0} mt={10} color="black" my="md" />
                    </Stack>
                    <Stack align="flex-start">
                        <TextInput w={250} style={{textAlign: "left"}} label="Username:" placeholder="Username"></TextInput>
                        <PasswordInput w={250} style={{textAlign: "left" }} label="Password:" placeholder="Password"></PasswordInput>
                    </Stack>
                    <Button color="#1F3E95" loading={loading} loaderProps={{ type: 'dots' }} onClick={() => {
                        setLoading(true);
                        setTimeout(function () { navigate("/home"); }, 1500)
                    }}>Login</Button>
                </Flex>
                <Flex h={120}></Flex>
            </Flex>
        </Center>
    )
}