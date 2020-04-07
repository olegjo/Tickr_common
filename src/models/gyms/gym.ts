import { DocumentData } from "../../firestore_types";
import { BarChartData, IBarChartDataItem } from "../../BarChartData";

export interface IOpeningHours {
    days: string;
    value: string;
}

export interface IGymData {
    name: string;
    openingHours: IOpeningHours[];
    gradeSystems: { routes: string; bouldering: string; };

    gradeDistributionBarChartData?: {
        routes: IBarChartDataItem[],
        boulders: IBarChartDataItem[],
    };
}

export class Gym {
    public gradeBarChartDataRoutes: BarChartData;
    public gradeBarChartDataBoulders: BarChartData;
    readonly name: string;
    readonly openingHours: IOpeningHours[];
    readonly gradeSystems: { routes: string; bouldering: string; };

    constructor(data: IGymData) {
        if (!data.name || !data.openingHours || !data.gradeSystems) {
            throw new Error("Invalid argument");
        }

        this.name = data.name;

        this.gradeBarChartDataRoutes = new BarChartData();
        this.gradeBarChartDataRoutes.fromFirestore(data.gradeDistributionBarChartData?.routes);

        this.gradeBarChartDataBoulders = new BarChartData();
        this.gradeBarChartDataBoulders.fromFirestore(data.gradeDistributionBarChartData?.boulders);

        this.openingHours = data.openingHours;
        this.gradeSystems = data.gradeSystems;
    }

    public toFirestore(): IGymData {
        return {
            name: this.name,
            openingHours: this.openingHours,
            gradeSystems: this.gradeSystems,
            gradeDistributionBarChartData: {
                boulders: this.gradeBarChartDataBoulders.toFirestore(),
                routes: this.gradeBarChartDataRoutes.toFirestore(),
            },
        };
    }

    static toFirestore(data: Gym): DocumentData {
        return data.toFirestore();
    }
    
    static fromFirestore(data: DocumentData): Gym {
        return new Gym(data as IGymData);
    }
}