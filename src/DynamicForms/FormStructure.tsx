import { formStructure } from "./dynamic-control-types";

export const DailyDryMixerRecord: formStructure = {
    formName: "Daily Dry Mixer Record",
    fields: {
        headerFields: [
            {
                fieldName: "date",
                inputType: "date",
                label: "Date",
                defaultValue: new Date()
            },
            {
                fieldName: "buyer",
                inputType: "text",
                label: "Buyer",
                defaultValue: ""
            },
            {
                fieldName: "line",
                inputType: "text",
                label: "Line",
                config: {
                    disabled: true
                },
                defaultValue: "A"
            },
            {
                fieldName: "product",
                inputType: "text",
                label: "Product",
                defaultValue: ""
            }
        ],
        timeFields: [
            {
                fieldName: "startTime",
                inputType: "time",
                label: "Start Time",
                defaultValue: ""
            },
            {
                fieldName: "stopTime",
                inputType: "time",
                label: "Stop Time",
                defaultValue: ""
            },
        ],
        dataFields: [
            {
                fieldName: "emflake3862",
                inputType: "number",
                label: "Emflake 3862\n(18.2kg)",
                defaultValue: 0
            },
            {
                fieldName: "emflake3910",
                inputType: "number",
                label: "Emflake 3910\n(22.7kg)",
                defaultValue: 0
            },
            {
                fieldName: "aviko230",
                inputType: "number",
                label: "Aviko 230\n(18.2kg)",
                defaultValue: 0
            },
            {
                fieldName: "aviko530",
                inputType: "number",
                label: "Aviko 530\n(22.7kg)",
                defaultValue: 0
            },
            {
                fieldName: "agriato",
                inputType: "number",
                label: "Agriato\n(18.2kg)",
                defaultValue: 0
            },
            {
                fieldName: "goodrich",
                inputType: "number",
                label: "India Flake - Goodrich\n(18.2kg)",
                defaultValue: 0
            },
            {
                fieldName: "asandas",
                inputType: "number",
                label: "India Flake - Asandas\n(18.2kg)",
                defaultValue: 0
            },
            {
                fieldName: "mixedStarch",
                inputType: "number",
                label: "Mixed Starch\n(12.82kg)",
                defaultValue: 0
            },
            {
                fieldName: "palmAndSoy",
                inputType: "number",
                label: "Addition of Palm Olein + Soy Lecithin\n(800ml)",
                defaultValue: 0
            },
            {
                fieldName: "palmOlein",
                inputType: "number",
                label: "Addition of Palm Olein (TGCC)\n(800ml)",
                defaultValue: 0
            },
            {
                fieldName: "scrapFlake",
                inputType: "number",
                label: "Addition of Scrap Flake (Normal)\n(12kg)",
                defaultValue: 0
            },
            {
                fieldName: "scrapFlakeNoSoy",
                inputType: "number",
                label: "Addition of Scrap Flake (TGCC: No Soy)\n(12kg)",
                defaultValue: 0
            }
        ],
        footerFields: [
            {
                fieldName: "recorded",
                inputType: "text",
                label: "Recorded by Operator",
                config: {
                    disabled: true
                },
                defaultValue: "Operator"
            },
            {
                fieldName: "remarks",
                inputType: "remarks",
                label: "Remarks",
                defaultValue: ""
            }
        ]
    }
};

export const FryerSectionRecord: formStructure = {
    formName: "Fryer Section Record",
    fields: {
        headerFields: [
            {
                fieldName: "date",
                inputType: "date",
                label: "Date",
                defaultValue: new Date()
            },
            {
                fieldName: "shift",
                inputType: "text",
                label: "Shift",
                defaultValue: ""
            },
            {
                fieldName: "line",
                inputType: "text",
                label: "Line",
                config: {
                    disabled: true
                },
                defaultValue: "A"
            }
        ],
        timeFields: [
            {
                fieldName: "time",
                inputType: "time",
                label: "Time",
                defaultValue: ""
            },
        ],
        dataFields: [
            {
                fieldName: "fryerSpeed",
                inputType: "number",
                label: "Fryer Speed",
                defaultValue: 0
            },
            {
                fieldName: "fryerTemp",
                inputType: "number",
                label: "Fryer Temperature",
                defaultValue: 0
            },
            {
                fieldName: "seasoningFlavour",
                inputType: "text",
                label: "Seasoning Flavour",
                defaultValue: ""
            },
            {
                fieldName: "seasoningSetting",
                inputType: "number",
                label: "Seasoning Setting",
                defaultValue: 0
            }
        ],
        checkFields: [
            {
                fieldName: "cookCondition",
                inputType: "checkbox",
                label: "Cook Condition",
                defaultValue: false
            },
            {
                fieldName: "gasLevel",
                inputType: "checkbox",
                label: "Gas Level",
                defaultValue: false
            },
            {
                fieldName: "tranferConveyer",
                inputType: "checkbox",
                label: "Transfer Conveyer",
                defaultValue: false
            },
            {
                fieldName: "fryerOilFilter",
                inputType: "checkbox",
                label: "Fryer Oil Filter",
                defaultValue: false
            },
            {
                fieldName: "fryerOilLevel",
                inputType: "checkbox",
                label: "Fryer Oil Level",
                defaultValue: false
            },
            {
                fieldName: "fryerDrumTray",
                inputType: "checkbox",
                label: "Fryer Drum Tray",
                defaultValue: false
            }
        ],
        footerFields: [
            {
                fieldName: "recorded",
                inputType: "text",
                label: "Recorded by Operator",
                config: {
                    disabled: true
                },
                defaultValue: "Operator"
            },
            {
                fieldName: "remarks",
                inputType: "remarks",
                label: "Remarks",
                defaultValue: ""
            }
        ]
    }
};

export const CrispsControlRecord: formStructure = {
    formName: "Crisps Control Record",
    fields: {
        headerFields: [
            {
                fieldName: "date",
                inputType: "date",
                label: "Date",
                defaultValue: new Date()
            },
            {
                fieldName: "line",
                inputType: "text",
                label: "Line",
                config: {
                    disabled: true
                },
                defaultValue: "A"
            },
            {
                fieldName: "product",
                inputType: "text",
                label: "Product",
                defaultValue: ""
            }
        ],
        timeFields: [
            {
                fieldName: "time",
                inputType: "time",
                label: "Time",
                defaultValue: ""
            },
        ],
        dataFields: [
            {
                fieldName: "crispsWeightL",
                inputType: "number",
                label: "Crisps Weight L\n(Average of 10 pcs)",
                defaultValue: 0
            },
            {
                fieldName: "crispsWeightM",
                inputType: "number",
                label: "Crisps Weight M\n(Average of 10 pcs)",
                defaultValue: 0
            },
            {
                fieldName: "crispsWeightR",
                inputType: "number",
                label: "Crisps Weight R\n(Average of 10 pcs)",
                defaultValue: 0
            },
            {
                fieldName: "crispsLengthL",
                inputType: "number",
                label: "Crisps Length L (mm)",
                defaultValue: 0
            },
            {
                fieldName: "crispsLengthM",
                inputType: "number",
                label: "Crisps Length M (mm)",
                defaultValue: 0
            },
            {
                fieldName: "crispsLengthR",
                inputType: "number",
                label: "Crisps Length R (mm)",
                defaultValue: 0
            },
            {
                fieldName: "crispsWidthL",
                inputType: "number",
                label: "Crisps Width L (mm)",
                defaultValue: 0
            },
            {
                fieldName: "crispsWidthM",
                inputType: "number",
                label: "Crisps Width M (mm)",
                defaultValue: 0
            },
            {
                fieldName: "crispsWidthR",
                inputType: "number",
                label: "Crisps Width R (mm)",
                defaultValue: 0
            },
            {
                fieldName: "netWeightCanister1",
                inputType: "number",
                label: "Net Weight of Crisps in Canister 1 (g)",
                defaultValue: 0
            },
            {
                fieldName: "netWeightCanister2",
                inputType: "number",
                label: "Net Weight of Crisps in Canister 2 (g)",
                defaultValue: 0
            },
            {
                fieldName: "netWeightCanister3",
                inputType: "number",
                label: "Net Weight of Crisps in Canister 3 (g)",
                defaultValue: 0
            },
            {
                fieldName: "netWeightCanister4",
                inputType: "number",
                label: "Net Weight of Crisps in Canister 4 (g)",
                defaultValue: 0
            },
            {
                fieldName: "netWeightCanister5",
                inputType: "number",
                label: "Net Weight of Crisps in Canister 5 (g)",
                defaultValue: 0
            },
            {
                fieldName: "netWeightCanister6",
                inputType: "number",
                label: "Net Weight of Crisps in Canister 6 (g)",
                defaultValue: 0
            },
        ],
        checkFields: [
            {
                fieldName: "organolepticAroma",
                inputType: "checkbox",
                label: "Organoleptic Aroma",
                defaultValue: false
            },
            {
                fieldName: "organolepticTaste",
                inputType: "checkbox",
                label: "Organoleptic Taste",
                defaultValue: false
            },
            {
                fieldName: "organolepticTexture",
                inputType: "checkbox",
                label: "Organoleptic Texture",
                defaultValue: false
            },
            {
                fieldName: "crispsAppearance",
                inputType: "checkbox",
                label: "Crisps Appearance",
                defaultValue: false
            },
            {
                fieldName: "weightBalanceGood",
                inputType: "checkbox",
                label: "Weight Balance Check Good",
                defaultValue: false
            },
            {
                fieldName: "weightBalanceFaulty",
                inputType: "checkbox",
                label: "Weight Balance Check Faulty",
                defaultValue: false
            },
            {
                fieldName: "weightBalanceTotal",
                inputType: "number",
                label: "Weight Balance Check Total",
                defaultValue: 0
            },
        ],
        footerFields: [
            {
                fieldName: "recorded",
                inputType: "text",
                label: "Recorded by",
                config: {
                    disabled: true
                },
                defaultValue: "Operator"
            },
            {
                fieldName: "remarks",
                inputType: "remarks",
                label: "Remarks",
                defaultValue: ""
            }
        ]
    }
};