import { DocumentData } from "../../firestore_types";
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

    readonly id?: string;
    readonly type: WallType;
    readonly height: number;
    readonly name: string;
    readonly routeCount: number;

    constructor(data: IWallData, id?: string) {
        if (!data.height_meters || !data.name || !data.type || !data.routeCount) {
            throw new Error("Invalid argument");
        }

        this.id = id;

        this.type = data.type;
        this.height = data.height_meters;
        this.name = data.name;
        this.routeCount = data.routeCount;

        this.gradeBarChartData = new BarChartData();
        this.gradeBarChartData.fromFirestore(data.gradeDistributionBarChartData);
    }

    public toFirestore(): IWallData {
        return {
            name: this.name,
            height_meters: this.height,
            routeCount: this.routeCount,
            type: this.type,
            gradeDistributionBarChartData: this.gradeBarChartData.toFirestore()
        };
    }

    static toFirestore(data: Wall): DocumentData {
        return data.toFirestore();
    }
    
    static fromFirestore(data: DocumentData): Wall {
        return new Wall(data as IWallData);
    }
}