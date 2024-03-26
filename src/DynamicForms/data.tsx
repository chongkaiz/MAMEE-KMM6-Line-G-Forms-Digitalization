export interface dailyDryMixerStruct {
    date: string;
    buyer: string;
    line: string;
    product: string;
    startTime: string;
    stopTime: string;
    emflake3862: number;
    emflake3910: number;
    aviko230: number;
    aviko530: number;
    agriato: number;
    goodrich: number;
    asandas: number;
    mixedStarch: number;
    palmAndSoy: number;
    palmOlein: number;
    scrapFlake: number;
    scrapFlakeNoSoy: number;
    recorded: string;
    remarks: string;
}

export interface fryerSectionInterface {
    date: string;
    shift: string;
    line: string;
    time: string;
    fryerSpeed: number;
    fryerTemp: number;
    seasoningFlavour: string;
    seasoningSetting: number;
    cookCondition: boolean;
    gasLevel: boolean;
    tranferConveyer: boolean;
    fryerOilFilter: boolean;
    fryerOilLevel: boolean;
    fryerDrumTray: boolean;
    recorded: string;
    remarks: string;
}

export interface crispsControlInterface {
    date: string;
    line: string;
    product: string;
    time: string;
    crispsWeightL: number;
    crispsWeightM: number;
    crispsWeightR: number;
    crispsLengthL: number;
    crispsLengthM: number;
    crispsLengthR: number;
    netWeightCanister1: number;
    netWeightCanister2: number;
    netWeightCanister3: number;
    netWeightCanister4: number;
    netWeightCanister5: number;
    netWeightCanister6: number;
    organolepticAroma: boolean;
    organolepticTaste: boolean;
    organolepticTexture: boolean;
    crispsAppearance: boolean;
    weightBalanceGood: boolean;
    weightBalanceFaulty: boolean;
    weightBalanceTotal: number;
    recorded: string;
    remarks: string;
}