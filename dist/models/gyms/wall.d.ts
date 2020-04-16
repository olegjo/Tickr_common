import { DocumentData } from "../../firestore_types";
import { BarChartData, IBarChartDataItem } from "../../BarChartData";
import { RouteType } from "../routes/route";
export declare type WallType = RouteType;
export interface IWallData {
    name: string;
    type: WallType;
    height_meters: number;
    routeCount: number;
    gradeDistributionBarChartData?: IBarChartDataItem[];
}
export declare class Wall {
    static COLLECTION_NAME: string;
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
