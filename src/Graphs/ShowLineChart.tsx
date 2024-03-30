import { LineChart } from "@mantine/charts"
import { Flex, Title, Text } from "@mantine/core";

function getMean(data: any) {
    let sum = 0;
    for (const point of data) {
        sum += (point.y1 + point.y2 + point.y3) / 3;
    }
    return sum / data.length;
}

function getStandardDeviation(data: any) {
    const mean = getMean(data);
    let sumOfSquaredDifferences = 0;
    for (const point of data) {
        const meanDifference = (point.y1 + point.y2 + point.y3) / 3 - mean;
        sumOfSquaredDifferences += meanDifference * meanDifference;
    }
    const variance = sumOfSquaredDifferences / data.length;
    return Math.sqrt(variance);
}

function getUpperLimit(data: any) {
    return getMean(data) + getStandardDeviation(data);
}

function getLowerLimit(data: any) {
    return getMean(data) - getStandardDeviation(data);
}

export default function ShowLineChart(props: { title: string; data: any; }) {
    return (
        <Flex w="100%" direction="column" gap={10} p={15} style={{ border: "solid grey 0.5px" }}>
            <Title order={5}>{props.title}</Title>
            <LineChart w="100%" h="60vh" data={props.data} withLegend dataKey="time" title={props.title}
                legendProps={{ verticalAlign: 'bottom', height: 35 }}
                yAxisProps={{ domain: [(dataMin: number) => Math.floor(dataMin * 0.95 * 10) / 10, (dataMax: number) => Math.ceil(dataMax * 1.05 * 10) / 10] }}
                referenceLines={[
                    { y: getMean(props.data), label: "Mean", isFront: true, stroke: "red" },
                    { y: getUpperLimit(props.data), label: "Upper Limit", isFront: true, stroke: "black", strokeDasharray: "7 7" },
                    { y: getLowerLimit(props.data), label: "Lower Limit", isFront: true, stroke: "black", strokeDasharray: "7 7" }
                ]}
                series={[
                    {
                        name: "y1",
                        label: "L",
                        color: 'blue'
                    },
                    {
                        name: "y2",
                        label: "M",
                        color: 'green'
                    },
                    {
                        name: "y3",
                        label: "R",
                        color: 'yellow'
                    },
                ]} />
            <Flex gap={10}>
                <Title order={4}>Mean: </Title>
                <Text>{getMean(props.data)}</Text>
            </Flex>
            <Flex gap={10}>
                <Title order={4}>Upper Limit: </Title>
                <Text>{getUpperLimit(props.data)}</Text>
            </Flex>
            <Flex gap={10}>
                <Title order={4}>Lower Limit: </Title>
                <Text>{getLowerLimit(props.data)}</Text>
            </Flex>
        </Flex>
    )
}