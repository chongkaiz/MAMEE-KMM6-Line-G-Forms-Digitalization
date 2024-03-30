import { Flex, Title, Divider, Grid, Text, Button, Table } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { IconArrowLeft, IconFileSpreadsheet } from "@tabler/icons-react";


interface CrispsControlReportData {
    formName: string;
    header: { [key: string]: any };
    dataset: {
        head: any;
        body: any;
    }
};

export default function ReportDisplay() {
    const navigate = useNavigate();
    const { state } = useLocation();
    const data: CrispsControlReportData = state;
    const formName: string = data.formName;
    const header: { [key: string]: any } = data.header;
    const dataset = data.dataset;


    return (
        <Flex h="100%" w="100%" direction="column" align="center">
            <Flex w="100%" justify="space-between" align="center">
                <Button color="#1F3E95" variant="subtle" onClick={() => navigate(-1)}><IconArrowLeft /></Button>
                <Title order={3}>{formName}</Title>
                <Button color="#1F3E95" variant="outline"><IconFileSpreadsheet /></Button>
            </Flex>
            <Divider my="md" w="100%" />
            <Flex w="100%" h="100%" direction="column" gap={20}>
                <Grid gutter={20} py={20} w="100%">
                    {Object.entries(header).map(([category, values]) => (
                        <Grid.Col key={category} span={4}>
                            <Flex gap={20} align="center">
                                <Title order={4}>{category}:</Title>
                                <Text>{values instanceof Date ? values.toLocaleDateString() : values}</Text>
                            </Flex>
                        </Grid.Col>
                    ))}
                </Grid>
            </Flex>
            <Flex w="100%" h="100%" gap={20}>
                <Table.ScrollContainer minWidth="100%">
                    <Table striped withTableBorder withColumnBorders data={dataset} />
                </Table.ScrollContainer>
            </Flex>
        </Flex>
    )
}