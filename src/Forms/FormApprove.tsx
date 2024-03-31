import { Button, Flex, Title, Divider, Center, TextInput } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import { useLocation, useNavigate } from "react-router-dom";
import ReviewData, {formReviewType} from "./ReviewData";


export default function FormApprove() {
    const { state } = useLocation();
    const categorizedValues: formReviewType = state;
    const navigate = useNavigate();
    return (
        <Flex h="100%" w="100%" direction="column" align="center">
            <Flex w="100%" justify="space-between" align="center">
                <Button variant="subtle" onClick={() => navigate(-1)}><IconArrowLeft /></Button>
                <Title order={3}>{categorizedValues.formName}</Title>
                <Flex></Flex>
            </Flex>
            <Divider my="md" w="100%" />
            <ReviewData {...categorizedValues} />
            <Center w="100%" bg="#DDFFDD" p={10}>
                <TextInput label="Approved by:" defaultValue="Supervisor" disabled></TextInput>
            </Center>
            <Divider w="100%" my="md" />
            <Button w={120} variant="filled" onClick={() => navigate("/home/form-check")}>Approve</Button>
        </Flex>
    )
}