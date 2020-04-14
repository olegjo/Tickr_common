import { DocumentData } from "../../firestore_types";
import { BarChartData, IBarChartDataItem } from "../../BarChartData";
export declare type WallType = "sportclimbing" | "bouldering";
export interface IWallData {
    name: string;
    type: WallType;
    height_meters: number;
    routeCount: number;
    gradeDistributionBarChartData?: IBarChartDataItem[];
}
export declare class Wall {
    gradeBarChartData: BarChartData;
    readonly type: WallType;
    readonly height: number;
    readonly name: string;
    readonly routeCount: number;
    constructor(data: IWallData);
    toFirestore(): IWallData;
    static toFirestore(data: Wall): DocumentData;
    static fromFirestore(data: DocumentData): Wall;
}
