import { DocumentData } from "../../firestore_types";
import { BarChartData, IBarChartDataItem } from "../../BarChartData";
import { isNullOrUndefined } from "util";
import { RouteType } from "../routes/route";

export type WallType = RouteType;

export interface IWallData {
    name: string;
    type: WallType;
    height_meters: number;
    routeCount: number;
    sector: string;

    gradeDistributionBarChartData?: IBarChartDataItem[];
}

export class Wall {
    static COLLECTION_NAME = "walls";

    public gradeBarChartData: BarChartData;

    readonly id?: string;
    readonly type: WallType;
    readonly height: number;
    readonly name: string;
    readonly sector: string;
    readonly routeCount: number;

    constructor(data: IWallData, id?: string) {
        if (
            isNullOrUndefined(data.height_meters) || 
            isNullOrUndefined(data.name) ||
            isNullOrUndefined(data.type) ||
            isNullOrUndefined(data.routeCount) ||
            isNullOrUndefined(data.sector)
        ) {
            throw new Error("Invalid argument");
        }

        this.id = id;

        this.type = data.type;
        this.height = data.height_meters;
        this.name = data.name;
        this.routeCount = data.routeCount;
        this.sector = data.sector;

        this.gradeBarChartData = new BarChartData();
        this.gradeBarChartData.fromFirestore(data.gradeDistributionBarChartData);
    }

    public toFirestore(): IWallData {
        return {
            name: this.name,
            height_meters: this.height,
            routeCount: this.routeCount,
            type: this.type,
            gradeDistributionBarChartData: this.gradeBarChartData.toFirestore(),
            sector: this.sector,
        };
    }

    static toFirestore(data: Wall): DocumentData {
        return data.toFirestore();
    }
    
    static fromFirestore(data: DocumentData): Wall {
        return new Wall(data as IWallData);
    }
}