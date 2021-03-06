import { DocumentData } from "../../firestore_types";
import { BarChartData, IBarChartDataItem } from "../../BarChartData";
import { ClimbingGradeSystem } from "../../ClimbingGrades";
export interface IOpeningHours {
    days: string;
    value: string;
}
export interface IGymData {
    name: string;
    openingHours: IOpeningHours[];
    gradeSystems: {
        sportclimbing: string;
        bouldering: string;
    };
    gradeDistributionBarChartData?: {
        sportclimbing: IBarChartDataItem[];
        boulders: IBarChartDataItem[];
    };
}
export declare class Gym {
    static COLLECTION_NAME: string;
    gradeBarChartDataSportclimbing: BarChartData;
    gradeBarChartDataBoulders: BarChartData;
    readonly id?: string;
    readonly name: string;
    readonly openingHours: IOpeningHours[];
    readonly gradeSystems: {
        sportclimbing: ClimbingGradeSystem;
        bouldering: ClimbingGradeSystem;
    };
    constructor(data: IGymData, id?: string);
    toFirestore(): IGymData;
    static toFirestore(data: Gym): DocumentData;
    static fromFirestore(data: DocumentData): Gym;
}
