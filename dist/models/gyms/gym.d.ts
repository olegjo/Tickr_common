import { DocumentData } from "../../firestore_types";
import { BarChartData, IBarChartDataItem } from "../../BarChartData";
export interface IOpeningHours {
    days: string;
    value: string;
}
export interface IGymData {
    name: string;
    openingHours: IOpeningHours[];
    gradeSystem: string;
    gradeDistributionBarChartData?: {
        routes: IBarChartDataItem[];
        boulders: IBarChartDataItem[];
    };
}
export declare class Gym {
    gradeBarChartDataRoutes: BarChartData;
    gradeBarChartDataBoulders: BarChartData;
    readonly name: string;
    readonly openingHours: IOpeningHours[];
    readonly gradeSystem: string;
    constructor(data: IGymData);
    toFirestore(): IGymData;
    static toFirestore(data: Gym): DocumentData;
    static fromFirestore(data: DocumentData): Gym;
}
