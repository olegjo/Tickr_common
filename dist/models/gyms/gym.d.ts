import { DocumentData } from "../../firestore_types";
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
    toFirestore(): {
        name: string;
        openingHours: IOpeningHours[];
        gradeBarChartData: import("../../BarChartData").IBarChartDataItem[];
    };
    static toFirestore(data: Gym): DocumentData;
    static fromFirestore(data: DocumentData): Gym;
}
