interface CrispsControlGraphData {
    formName: string;
    header: { [key: string]: any };
    graphs: {
        title: string;
        data: any;
    }[]
};

export const CrispsControlData1: CrispsControlGraphData = {
    formName: "Crisps Control Record",
    header: {
        Date: new Date("2024-03-27T05:11:03.992Z"),
        Line: "A",
        Product: "Crisps"
    },
    graphs: [{
        title: "Crisps Weight (Average of 10 pcs)",
        data: [
            {
                time: "08:20",
                y1: 2.15,
                y2: 2.04,
                y3: 2.14
            },
            {
                time: "08:50",
                y1: 2.16,
                y2: 2.05,
                y3: 2.12
            },
            {
                time: "09:20",
                y1: 2.15,
                y2: 2.07,
                y3: 2.10
            },
            {
                time: "09:50",
                y1: 2.17,
                y2: 2.12,
                y3: 2.18
            },
            {
                time: "10:20",
                y1: 2.14,
                y2: 2.06,
                y3: 2.12
            },
            {
                time: "14:40",
                y1: 2.10,
                y2: 2.02,
                y3: 2.04
            },
            {
                time: "15:10",
                y1: 2.11,
                y2: 2.01,
                y3: 2.05
            },
        ]
    },
    {
        title: "Crisps Length (mm)",
        data: [
            {
                time: "08:20",
                y1: 68,
                y2: 69,
                y3: 68
            },
            {
                time: "08:50",
                y1: 68,
                y2: 69,
                y3: 68
            },
            {
                time: "09:20",
                y1: 68,
                y2: 69,
                y3: 68
            },
            {
                time: "09:50",
                y1: 68,
                y2: 69,
                y3: 68
            },
            {
                time: "10:20",
                y1: 68,
                y2: 69,
                y3: 69
            },
            {
                time: "14:40",
                y1: 67,
                y2: 67,
                y3: 67
            },
            {
                time: "15:10",
                y1: 67,
                y2: 68,
                y3: 68
            },
        ]
    },
    {
        title: "Crisps Width (mm)",
        data: [
            {
                time: "08:20",
                y1: 45,
                y2: 45,
                y3: 44
            },
            {
                time: "08:50",
                y1: 45,
                y2: 45,
                y3: 44
            },
            {
                time: "09:20",
                y1: 44,
                y2: 44,
                y3: 44
            },
            {
                time: "09:50",
                y1: 44,
                y2: 44,
                y3: 44
            },
            {
                time: "10:20",
                y1: 44,
                y2: 44,
                y3: 44
            },
            {
                time: "14:40",
                y1: 44,
                y2: 44,
                y3: 44
            },
            {
                time: "15:10",
                y1: 44,
                y2: 44,
                y3: 44
            },
        ]
    },
    {
        title: "Net Weight of Crisps in Canister (g)",
        data: [
            {
                time: "08:20",
                y1: 162.7,
                y2: 163.1,
                y3: 162.9
            },
            {
                time: "08:50",
                y1: 161.9,
                y2: 163.2,
                y3: 161.5
            },
            {
                time: "09:20",
                y1: 163.4,
                y2: 162.6,
                y3: 161.7
            },
            {
                time: "09:50",
                y1: 161.6,
                y2: 160.8,
                y3: 161.9
            },
            {
                time: "10:20",
                y1: 162.4,
                y2: 163.2,
                y3: 162.5
            },
            {
                time: "14:40",
                y1: 166.2,
                y2: 166.1,
                y3: 162.6
            },
            {
                time: "15:10",
                y1: 161.9,
                y2: 163.2,
                y3: 162.5,
            },
        ]
    },
    ]
}