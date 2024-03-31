import React, { useState } from "react";
import { Flex, Center, TextInput, PasswordInput, Button, Text, Title, Stack, Divider } from "@mantine/core"
import { useNavigate } from "react-router-dom"


export default function LoginForm(props: {username : string, setUsername : React.Dispatch<React.SetStateAction<string>>}) {
    const [loading, setLoading] = useState(false);
    const [wrongUser, setWrongUser] = useState(false);

    const navigate = useNavigate();
    return (
        <Center w="100vw" h="100vh" bg="#F8D30E">
            <Flex h="80vh" direction="column" justify="space-between" align="center">
                <img style={{ height: 120 }} alt='mamee-logo' src="\src\assets\Mamee.png" />
                <Flex h={400} direction="column" justify="space-between" p={30} bg="white"
                    style={{ border: "black solid 1px", borderRadius: "30px", boxShadow: "5px 5px #AAAAAA" }}>
                    <Stack gap={0}>
                        <Title order={2}>Login</Title>
                        <Divider mb={0} mt={10} color="black" my="md" />
                    </Stack>
                    <Stack align="flex-start">
                        <Stack gap={0} w="100%" align="flex-start">
                            <TextInput w={250} style={{ textAlign: "left" }} label="Username:" placeholder="Username"
                                onChange={(e) => {
                                    setWrongUser(false);
                                    props.setUsername(e.currentTarget.value)
                                }}></TextInput>
                                {wrongUser && <Text size="xs" c="red">User doesn't exist!</Text>}
                        </Stack>
                        <PasswordInput w={250} style={{ textAlign: "left" }} label="Password:" placeholder="Password"></PasswordInput>
                    </Stack>
                    <Button loading={loading} loaderProps={{ type: 'dots' }} onClick={() => {
                        setLoading(true);
                        setTimeout(function () {
                            if (props.username == "Operator" || props.username == "operator" || props.username == "Supervisor" || props.username == "supervisor") {
                                navigate("/home");
                            }
                            else {
                                setLoading(false);
                                setWrongUser(true);
                            }
                        }, 1000)
                    }}>Login</Button>
                </Flex>
                <Flex h={120}></Flex>
            </Flex>
        </Center>
    )
}