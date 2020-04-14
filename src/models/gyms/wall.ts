import { BarChartData, IBarChartDataItem } from "../../BarChartData";

export type WallType = "sportclimbing" | "bouldering";

export interface IWallData {
    name: string;
    type: WallType;
    height_meters: number;
    routeCount: number;

    gradeDistributionBarChartData?: IBarChartDataItem[];
}

export class Wall {
    public gradeBarChartData: BarChartData;

    readonly type: WallType;
    readonly height: number;
    readonly name: string;
    readonly routeCount: number;

    constructor(data: IWallData) {
        if (!data.height_meters || !data.name || !data.type || !data.routeCount) {
            throw new Error("Invalid argument");
        }

        this.type = data.type;
        this.height = data.height_meters;
        this.name = data.name;
        this.routeCount = data.routeCount;

        this.gradeBarChartData = new BarChartData();
        this.gradeBarChartData.fromFirestore(data.gradeDistributionBarChartData);
    }
}