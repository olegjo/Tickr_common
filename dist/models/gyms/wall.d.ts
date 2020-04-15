import { DocumentData } from "../../firestore_types";
import { BarChartData, IBarChartDataItem } from "../../BarChartData";
declare const WALL_TYPES: readonly ["sportclimbing", "bouldering"];
export declare type WallType = typeof WALL_TYPES[number];
export interface IWallData {
    name: string;
    type: WallType;
    height_meters: number;
    routeCount: number;
    gradeDistributionBarChartData?: IBarChartDataItem[];
}
export declare class Wall {
    gradeBarChartData: BarChartData;
    readonly id?: string;
    readonly type: WallType;
    readonly height: number;
    readonly name: string;
    readonly routeCount: number;
    constructor(data: IWallData, id?: string);
    toFirestore(): IWallData;
    static toFirestore(data: Wall): DocumentData;
    static fromFirestore(data: DocumentData): Wall;
}
export {};
