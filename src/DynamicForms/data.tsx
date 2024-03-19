import { DynamicFieldData } from "./dynamic-control-types";

/*
formFieldsDryMixerRecord = {
    startTime: string,
    stopTime: string,
    emflake3862: number,
    emflake3910: number,
    aviko230: number,
    aviko530: number,
    agriato: number,
    goodrich: number,
    asandas: number,
    mixedStarch: number,
    palmAndSoy: number,
    palmOlein: number,
    scrapFlake: number,
    scrapFlakeNoSoy: number,
    recorded: string,
    verified: string,
    remarks: string
}
*/

export const fields: DynamicFieldData[] = [
    {
        fieldName: "startTime",
        inputType: "time",
        label: "Start Time",
        defaultValue: "",
        config: {
            required: "Required"
        }
    },
    {
        fieldName: "stopTime",
        inputType: "time",
        label: "Stop Time",
        defaultValue: "",
        config: {
            required: "Required"
        }
    },
    {
        fieldName: "emflake3862",
        inputType: "number",
        label: "Emflake 3862",
        defaultValue: 0
    },
    {
        fieldName: "emflake3910",
        inputType: "number",
        label: "Emflake 3910",
        defaultValue: 0
    },
    {
        fieldName: "aviko230",
        inputType: "number",
        label: "Aviko 230",
        defaultValue: 0
    },
    {
        fieldName: "aviko530",
        inputType: "number",
        label: "Aviko 530",
        defaultValue: 0
    },
    {
        fieldName: "agriato",
        inputType: "number",
        label: "Agriato",
        defaultValue: 0
    },
    {
        fieldName: "goodrich",
        inputType: "number",
        label: "India Flake - Goodrich",
        defaultValue: 0
    },
    {
        fieldName: "asandas",
        inputType: "number",
        label: "India Flake - Asandas",
        defaultValue: 0
    },
    {
        fieldName: "mixedStarch",
        inputType: "number",
        label: "Mixed Starch",
        defaultValue: 0
    },
    {
        fieldName: "palmAndSoy",
        inputType: "number",
        label: "Addition of Palm Olein + Soy Lecithin",
        defaultValue: 0
    },
    {
        fieldName: "palmOlein",
        inputType: "number",
        label: "Addition of Palm Olein (TGCC)",
        defaultValue: 0
    },
    {
        fieldName: "scrapFlake",
        inputType: "number",
        label: "Addition of Scrap Flake (Normal)",
        defaultValue: 0
    },
    {
        fieldName: "scrapFlakeNoSoy",
        inputType: "number",
        label: "Addition of Scrap Flake (TGCC: No Soy)",
        defaultValue: 0
    },
    {
        fieldName: "recorded",
        inputType: "text",
        label: "Recorded by Operator",
        defaultValue: ""
    },
    {
        fieldName: "verified",
        inputType: "text",
        label: "Verified by PN Asst. Sup/ Supervisor",
        defaultValue: ""
    },
    {
        fieldName: "remarks",
        inputType: "text",
        label: "Remarks",
        defaultValue: ""
    }
];
