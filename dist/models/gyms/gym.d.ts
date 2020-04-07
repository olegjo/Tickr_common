import { BarChartData } from "../../BarChartData";
export interface IOpeningHours {
    days: string;
    value: string;
}
export declare class Gym {
    gradeBarChartData: BarChartData;
    readonly name: string;
    readonly openingHours: IOpeningHours[];
    constructor(data: any);
}
