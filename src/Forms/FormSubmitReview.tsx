import { Button, Flex, Title, Divider } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import ReviewData, {formReviewType} from "./ReviewData";


export default function FormSubmitReview() {
    const { state } = useLocation();
    const categorizedValues: formReviewType = state;
    const navigate = useNavigate();
    return (
        <Flex h="100%" w="100%" direction="column" align="center">
            <Title order={3}>{categorizedValues.formName}</Title>
            <Divider my="md" w="100%"/>
            <ReviewData {...categorizedValues} />
            <Divider my="md" w="100%"/>
            <Button w={120} variant="filled" onClick={() => navigate("/home")}>OK</Button>
        </Flex>
    )
}