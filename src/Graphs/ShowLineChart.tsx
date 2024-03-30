import { LineChart } from "@mantine/charts"
import { Flex, Title } from "@mantine/core";

export default function ShowLineChart(props: {
    title: string;
    data: any;
}) {
    return (
        <Flex w="100%" direction="column" gap={10} p={15} style={{ border: "solid grey 0.5px" }}>
            <Title order={5}>{props.title}</Title>
            <LineChart w="100%" h="40vh" data={props.data} withLegend dataKey="time" title={props.title}
                legendProps={{ verticalAlign: 'bottom', height: 35 }}
                yAxisProps={{ domain: ['dataMin', 'dataMax'] }}
                series={[
                    {
                        name: "y1",
                        color: 'blue'
                    },
                    {
                        name: "y2",
                        color: 'red'
                    },
                    {
                        name: "y3",
                        color: 'yellow'
                    },
                ]} />
        </Flex>
    )
}